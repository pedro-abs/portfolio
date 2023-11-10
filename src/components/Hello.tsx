import Image from 'next/image'
import Link from 'next/link'

import img from '@/assets/profile.png'
import { Button } from './ui/button'
import { ReactNode } from 'react'
import { SOCIALS } from '@/utils/socials'

export const Hello = () => {
  return (
    <section className="flex max-h-min flex-col-reverse items-center justify-between gap-8 px-[5%] py-8 sm:flex-row sm:gap-0 sm:px-[10%]">
      <div className="flex w-full max-w-sm flex-col justify-evenly space-y-2">
        <span className="text-center text-xl leading-none text-primary sm:text-start">
          DEVELOPER FRONT-END
        </span>
        <h1 className="text-center font-serif text-4xl font-semibold leading-none sm:text-start">
          Olá, meu nome <br /> é Pedro Augusto
        </h1>
        <p className="text-center text-lg font-light leading-none sm:w-11/12 sm:text-start">
          Sou um entusiasta da tecnologia e aspirante a Desenvolvedor Front-End
          com um foco especial em ReactJS.
        </p>
        <div className="flex justify-center space-x-2 sm:justify-start">
          <Socials href={SOCIALS.github}>GitHub</Socials>
          <Socials href={SOCIALS.linkedin}>LinkedIn</Socials>
        </div>
      </div>
      <div className="relative flex h-80 w-80 max-w-xs items-center justify-center">
        <Image
          src={img}
          alt={''}
          loading="lazy"
          className="absolute aspect-square w-full"
        />
      </div>
    </section>
  )
}

const Socials = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Button className="rounded-md bg-background" variant={'secondary'}>
      <Link href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </Link>
    </Button>
  )
}
