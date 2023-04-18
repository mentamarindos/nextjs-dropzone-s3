import { Button } from '@/components/ui/button'
import useDragAndDrop from '@/hooks/useDragAndDrop'

const DragAndDrop = () => {
    const { myFiles, removeFile, getRootProps, getInputProps } = useDragAndDrop()

    const fileList = myFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <Button variant='link' onClick={removeFile(file)}>X</Button>
        </li>
    ))

    return (
        <section>
            {(myFiles.length === 0)
                ? <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                : <aside className='bg-slate card'>
                    <h4>Files</h4>
                    <ul>{fileList}</ul>
                </aside>
            }
        </section>
    )
}

export default DragAndDrop
