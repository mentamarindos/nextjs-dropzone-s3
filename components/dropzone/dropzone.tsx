import Menu from '@/components/dropzone/menu'
import { Button } from '@/components/ui/button'
import DragAndDrop from './drag-and-drop'

export default function Dropzone() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 justify-items-center gap-10">
                <Menu />
                <DragAndDrop />
                <Button>Upload 🚀</Button>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-1 pt-12">
                <span className="pb-2">Want to keep your files for longer? </span>
                <Button variant="subtle">Create an account</Button>
            </div>
        </div>
    )
}
