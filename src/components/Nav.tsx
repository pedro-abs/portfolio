import Link from 'next/link'
import { Button } from './ui/button'

export const Nav = ({ children }: { children: string }) => {
  return (
    <li>
      <Button variant={'link'} size={'sm'} className="justify-start" asChild>
        <Link href={''} className="w-full hover:cursor-not-allowed">
          {children}
        </Link>
      </Button>
    </li>
  )
}
