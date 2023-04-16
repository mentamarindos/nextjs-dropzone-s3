import Menu from "@/components/dropzone/menu"
import { Button } from "../ui/button"
import DragAndDrop from "./drag-and-drop"

export default function Dropzone () {

    return (
        <div className="container">
            <div className="grid grid-cols-1 justify-items-center gap-10">
            <Menu />
            <DragAndDrop/>
            <Button>Upload</Button>
            </div>
        </div>
    )

}