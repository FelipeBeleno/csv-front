import { type ChangeEvent, useState } from "react"


interface FileUploadProps {
  onFileUpload: (file: File) => void
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    console.log(e.target.files?.[0])
    const file = e.target.files?.[0]

    if (file) {
      setFileName(file.name)
      onFileUpload(file)
    }
  }

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
          </p>
          <p className="text-xs text-gray-500">CSV (MAX. 10MB)</p>
        </div>
        <input id="file-upload" type="file" accept=".csv" className="hidden" onChange={handleFileChange} />
      </label>
      {fileName && <p className="mt-2 text-sm text-gray-500 text-center">Archivo seleccionado: {fileName}</p>}
    </div>
  )
}

