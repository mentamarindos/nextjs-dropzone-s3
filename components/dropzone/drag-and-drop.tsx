import React, { useEffect } from 'react'
import useDragAndDrop from '@/hooks/use-drag-n-drop'
import { cn } from '@/lib/utils'
import { type IFile } from '@/types/file'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import FilePreview from './file-preview'

const DragAndDrop = () => {
    const { myFiles, removeFile, getRootProps, getInputProps } = useDragAndDrop()

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => { myFiles.forEach((file: IFile) => { URL.revokeObjectURL(file.preview) }) }
    }, [])

    const dropInput = (
        <CardContent>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag `n` drop some files here, or click to select files</p>
            </div>
        </CardContent>
    )

    const fileList = myFiles.map((file: IFile) => (
        <FilePreview file={file} key={file.path} removeFile={removeFile} />
    ))

    const filesPreview = (
        <>
            <CardHeader>
                <CardTitle>Files available</CardTitle>
            </CardHeader>
            <CardContent className={cn('w-lg')}>
                {fileList}
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
