import {
  ChartLineIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  LayersIcon,
  UsersIcon,
} from 'lucide-react'

import { Accordion } from '@/components/ui/accordion'

import { NavGroupItem, NavGroupRoot } from './nav-group'
import { NavItem } from './nav-item'

function PrimaryMenu() {
  return (
    <Accordion type="single" collapsible>
      <nav className="space-y-2">
        <NavItem href="/" icon={HomeIcon}>
          Option 1
        </NavItem>

        <NavItem href="#" icon={ChartLineIcon}>
          Option 2
        </NavItem>

        <NavGroupRoot title="Option 3" icon={LayersIcon}>
          <NavGroupItem href="#">Option 1</NavGroupItem>
          <NavGroupItem href="#">Option 2</NavGroupItem>
          <NavGroupItem href="#">Option 3</NavGroupItem>
        </NavGroupRoot>

        <NavItem href="#" icon={CheckSquareIcon}>
          Option 4
        </NavItem>

        <NavGroupRoot title="Option 5" icon={FlagIcon}>
          <NavGroupItem href="#">Option 1</NavGroupItem>
          <NavGroupItem href="#">Option 2</NavGroupItem>
          <NavGroupItem href="#">Option 3</NavGroupItem>
        </NavGroupRoot>

        <NavItem href="#" icon={UsersIcon}>
          Option 6
        </NavItem>
      </nav>
    </Accordion>
  )
}

export { PrimaryMenu }
