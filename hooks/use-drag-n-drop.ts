import { useDropzone } from 'react-dropzone'
import { useState, useCallback } from 'react'

export default function useDragAndDrop() {
    const [myFiles, setMyFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
    // setMyFiles([...myFiles, ...acceptedFiles])
    setMyFiles(acceptedFiles.map(file => {
        // if(file.)

        return Object.assign(file, {
            preview: URL.createObjectURL(file)
        })
        })
    )
    }, [myFiles])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    function removeFile(file) {
return () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(file => newFiles)
}
    }

    return {
        myFiles,
removeFile,
        getRootProps,
        getInputProps
    }
}
