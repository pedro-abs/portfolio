import Image from 'next/image'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { randomUUID } from 'crypto'

import { Button } from '@/components/ui/button'

import { DATA } from './script'

export const Projects = () => {
  return (
    <section className="space-y-10 px-4 py-8 sm:px-[10%]">
      <h2 className="text-center font-serif text-4xl font-bold">Projetos</h2>
      <div className="flex flex-col items-center gap-8">
        {DATA.map((i) => {
          return <Card key={randomUUID()} {...i} />
        })}
      </div>
    </section>
  )
}

const Card = ({
  href,
  title,
  text,
  src,
}: {
  href: string
  title: string
  text: string
  src: string | StaticImport
}) => {
  return (
    <div className="flex w-full max-w-2xl flex-col-reverse overflow-hidden rounded-xl bg-background shadow  sm:flex-row sm:even:flex-row-reverse">
      <div className="flex h-auto w-full flex-col items-center justify-center space-y-4 p-8 sm:w-1/2 sm:items-start">
        <h3 className="text-center font-serif text-2xl font-bold sm:text-start">
          {title}
        </h3>
        <p className="text-center font-normal leading-tight sm:text-start">
          {text}
        </p>
        <Button variant={'outline'} className="rounded-3xl bg-transparent">
          <Link href={href} rel="noopener noreferrer" target="_blank">
            View Project
          </Link>
        </Button>
      </div>
      <Image
        src={src}
        alt={''}
        width={400}
        height={400}
        className="aspect-square w-full bg-zinc-700 object-none sm:w-1/2"
      />
    </div>
  )
}
