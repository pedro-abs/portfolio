import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-4 px-4 py-6 font-serif sm:flex-row sm:justify-between sm:gap-0 sm:px-[10%] sm:py-4">
      <h1 className="text-lg font-bold leading-none">Pedro Augusto</h1>
      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <Nav>About</Nav>
          <Nav>Projects</Nav>
        </ul>
      </nav>
    </header>
  )
}

const Nav = ({ children }: { children: string }) => {
  return (
    <li>
      <Link href={''} className="hover:cursor-not-allowed">
        {children}
      </Link>
    </li>
  )
}
