import React, { useEffect } from 'react'
import useDragAndDrop from '@/hooks/use-drag-n-drop'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

const DragAndDrop = () => {
    const { myFiles, removeFile, getRootProps, getInputProps } = useDragAndDrop()

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => { myFiles.forEach(file => { URL.revokeObjectURL(file.preview) }) }
    }, [])

    const dropInput = (
        <CardContent>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
        </CardContent>
    )

    const fileList = myFiles.map(file => (
        <li key={file.path}>
            <img
                src={file.preview}
                className={cn('object-cover w-[99px] h-[99px]')}
                // Revoke data uri after image is loaded
                onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
            {file.path} [preview: {file.preview}]
            <Button variant='link' onClick={removeFile(file)}>X</Button>
        </li>
    ))

    const filesPreview = (
        <>
            <CardHeader>
                <CardTitle>Files available</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>{fileList}</ul>
            </CardContent>
        </>
    )

    return (
        <section>
            <Card className='w-[600px]'>
                {(myFiles.length === 0) ? dropInput : filesPreview}
            </Card>
        </section >
    )
}

export default DragAndDrop
