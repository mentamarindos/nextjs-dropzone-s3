import { cn } from '@/lib/utils'
import { type IFile } from '@/types/file'
import { Button } from '../ui/button'
import FileIcon from 'img/file-icon.svg'
import Image from 'next/image'

export default function FilePreview({ file, removeFile }: { file: IFile, removeFile: (file: IFile) => () => void }) {
    return (
        <li key={file.path}>
            <Button variant='link'
                className={cn('mr-2')}
                onClick={removeFile(file)}>X</Button>

            {file.type.startsWith('image')
                ? <img
                    src={file.preview}
                    className={cn('object-cover w-[99px] h-[99px]')}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
                : <Image
                    alt='file icon'
                    width={100}
                    src={FileIcon}
                />
            }
            <small> {file.path} </small>
        </li>
    )
}
