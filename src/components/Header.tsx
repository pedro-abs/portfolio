import { ModeToggle } from './ModeToggle'
import { Menu } from './Menu'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between gap-4 px-[5%] py-4 font-serif sm:gap-0 sm:px-[10%]">
      <h1 className="text-lg font-bold leading-none">Pedro Augusto</h1>
      <nav className="hidden sm:block">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <Nav>Sobre</Nav>
          <Nav>Projetos</Nav>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <Menu />
    </header>
  )
}
