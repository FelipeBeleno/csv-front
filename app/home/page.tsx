'use client'
import React, { useCallback, useEffect, useMemo } from 'react'
import { Button, Card, CardBody } from "@heroui/react";
import FileUpload from "@/components/FileUpload";
import { useState } from "react";
import DataTable from '@/components/DataTable';
import { TableInterface } from '@/interfaces/Table.Interface';
import { Accordion, AccordionItem } from "@heroui/accordion";
import LoadingSpinner from '@/components/LoadingSpinner';
import UserIcon from '@/Icons/UserIcon';
import { AuthResponse } from '@/interfaces/ResponseAuth.iterface';

import { ToastContainer, toast } from 'react-toastify';
import { config } from '@/config/config';


const HomePage = () => {


    const [isLoading, setIsLoading] = useState(false)

    const [dataTable, setDataTable] = useState<TableInterface[]>([])

    const [nameFiles, setNameFiles] = useState<string[]>([])

    const [token, setToken] = useState<string>('');

    const dataTableMemo = useMemo(() => dataTable, [dataTable]);

    const getAllData = useCallback(
        async () => {


            const request = await fetch(`${config.urlBack}/api/csv`, {
                method: 'GET',
                headers: {
                    authorization: token
                }

            });

            if (request.status === 401) {
                toast.error('No autorizado')
                setIsLoading(false)
                return

            }
            const response = await request.json();

            const arrayNames = response.map((d: TableInterface) => d.name) || [];
            setNameFiles(arrayNames)
            setDataTable(response)





        },
        [token]
    )

    useEffect(() => {


        if (token.length > 0) {

            getAllData();
        }

    }, [token])

    const handleFileUpload = async (file: File) => {




        setIsLoading(true)

        const formData = new FormData()
        formData.append('file', file)



        const request = await fetch(`${config.urlBack}/api/csv`, {
            method: 'POST',
            headers: {
                authorization: token
            },
            body: formData,

        })

        if (request.status === 401) {
            toast.error('No autorizado')
            setIsLoading(false)
            return

        }
        await request.json();


        await getAllData()

        setIsLoading(false)


    }

    async function login() {

        const request = await fetch(`${config.urlBack}/api/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'felipe@mail.com'
            }),

        })

        const response: AuthResponse = await request.json();

        setToken(response.token);

        toast.success('Autorizado')

    }

    return (
        <div className='w-screen h-screen'>

            {
                isLoading
                    ? <LoadingSpinner />
                    : <>
                        <div className='fixed bottom-5 right-5'>
                            <Button color="success" onClick={() => {
                                login()
                            }} endContent={<UserIcon />}>
                                Login
                            </Button>
                        </div>


                        <div className='h-full flex justify-evenly gap-5 flex-col items-center' >
                            <Card className=" max-h-full  mx-auto overflow-hidden">
                                <CardBody className="flex flex-col items-center gap-6">
                                    <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Visualizador de CSV
                                    </h1>
                                    <FileUpload onFileUpload={handleFileUpload} />
                                </CardBody>
                            </Card>


                            {
                                nameFiles.length > 0
                                    ?
                                    <Card className="w-3/4">
                                        <CardBody className="flex flex-col items-center gap-6">
                                            <Accordion>
                                                {nameFiles.length > 0 ? (
                                                    nameFiles.map((d, i) => (
                                                        <AccordionItem key={i} title={d}>{
                                                            <DataTable data={dataTableMemo[i].data} headers={dataTableMemo[i].headers} />
                                                        }</AccordionItem>
                                                    ))
                                                ) : (
                                                    <></>
                                                )}
                                            </Accordion>

                                        </CardBody>
                                    </Card>

                                    : <></>

                            }


                        </div></>
            }

            <ToastContainer />


        </div>
    )
}

export default HomePage