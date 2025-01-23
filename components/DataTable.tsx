import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"


interface DataTableProps {
    headers: string[],
    data: string[][]
}

export default function DataTable({ headers, data  }: DataTableProps) {
   

    return (
        <div className="w-full overflow-x-auto">
            <Table aria-label="Tabla de datos CSV" className="min-w-full">
                <TableHeader>
                    {headers.map((header, index) => (
                        <TableColumn key={index} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold">
                            {header}
                        </TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

