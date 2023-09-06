import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ModeToggle } from './ModeToggle'
import { Nav } from './Nav'

export const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger className="block sm:hidden">
        <Button variant={'outline'} size={'icon'}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetFooter className="flex h-full flex-col items-center justify-between py-8">
          <nav className="w-full">
            <ul className="flex w-full flex-col justify-center">
              <Nav>Sobre</Nav>
              <Separator />
              <Nav>Projetos</Nav>
              <Separator />
            </ul>
          </nav>
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
