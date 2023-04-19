import { useDropzone } from 'react-dropzone'
import { useState, useCallback } from 'react'

export default function useDragAndDrop () {
  const [myFiles, setMyFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    // setMyFiles([...myFiles, ...acceptedFiles])
    setMyFiles(acceptedFiles.map(file => {
      if ((file.type as string).startsWith('image')) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      }

      return file
    })
    )
  }, [myFiles])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  function removeFile (file) {
    return () => {
      const newFiles: any = [...myFiles]
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
