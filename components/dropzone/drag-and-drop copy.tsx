import { useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'

const InnerBoxTextAndIcon = () => {
    return (
        <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline">browse</span>
            </span>
        </span>
    )
}

const formatJSON = (json: string) => JSON.stringify(JSON.parse(json), null, 4)

interface IFileDropZoneProps {
    onSuccess: (message: string) => void
    onError: (error: string) => void
    onDragStatusChange: (dragOn: boolean) => void
}
const onFileDropped =
    ({ onSuccess, onError }: Omit<IFileDropZoneProps, 'onDragStatusChange'>) =>
        (e: ProgressEvent<FileReader>) => {
            const contents = e?.target?.result
            if (typeof contents === 'string') {
                try {
                    const json = formatJSON(contents)
                    onSuccess(json)
                } catch (e) {
                    onError('Cannot format as valid JSON')
                }
            } else {
                onError('Unsupported format')
            }
        }
//
export default function DragAndDrop() {
    //
    // const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
    const onDrop = useCallback(([file]) => {
        const reader = new FileReader()
        reader.onload = onFileDropped({ onSuccess, onError })
        reader.readAsText(file)
    }, [])

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/json': ['.json']
        },
        maxFiles: 1
    })

    const refInput = useRef([])

    const files = acceptedFiles.map((file: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    return (
        <>
            {acceptedFiles
                ? <section className="container flex justify-center w-full h-32 px-4 transition bg-white border-2
                border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <InnerBoxTextAndIcon />
                        <input {...getInputProps()} ref={refInput} />
                    </div>

                </section>
                : <aside>
                    <h4>Selected files</h4>
                    <ul>{files}</ul>
                    <Button variant="link" onClick={() => { refInput.current = [] }}>Reset files</Button>
                </aside>
            }
        </>
    )
}
