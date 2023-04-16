import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function Menu() {
  return (
    <div className="flex gap-4">

      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Make file private
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">One time download</Label>
      </div>

    </div>
  )
}
