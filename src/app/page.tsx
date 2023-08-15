import { Button } from '@/components/ui/button'
import Image from 'next/image'

import img from '@/assets/imageBg.svg'

export default function Home() {
  return (
    <>
      <section className="flex max-h-min flex-col-reverse items-center justify-between gap-8 px-4 py-8 sm:flex-row sm:gap-0 sm:px-[10%]">
        <div className="flex w-full max-w-sm flex-col justify-evenly space-y-2">
          <span className="text-center text-xl leading-none text-amber-800 sm:text-start">
            DEVELOPER FRONT-END
          </span>
          <h1 className="text-center font-serif text-4xl font-semibold leading-none text-zinc-800 sm:text-start">
            Hello, my name <br /> is Pedro Augusto
          </h1>
          <p className="text-center text-lg font-light leading-none text-zinc-500 sm:w-11/12 sm:text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            cupiditate laborum ut saepe eligendi obcaecati debitis modi iusto
            commodi officia?
          </p>
          <div className="flex justify-center space-x-2 sm:justify-start">
            <Button className="rounded-md bg-amber-800 hover:bg-amber-900">
              Projects
            </Button>
            <Button className="rounded-md border-zinc-800" variant={'outline'}>
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-80 max-w-xs">
          <Image src={img} alt={''} className="absolute aspect-square w-full" />
        </div>
      </section>
      <section className="space-y-10 px-4 py-8 sm:px-[10%]">
        <h3 className="text-center font-serif text-4xl font-bold text-zinc-800">
          Projects
        </h3>
        <div className="flex flex-col items-center gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}

const Card = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col-reverse overflow-hidden rounded-xl bg-white shadow sm:flex-row sm:even:flex-row-reverse">
      <div className="flex h-auto w-full flex-col items-center justify-center space-y-4 p-8 sm:w-1/2 sm:items-start">
        <h4 className="text-center font-serif text-2xl font-bold text-zinc-800 sm:text-start">
          Project Name
        </h4>
        <p className="text-center font-normal leading-tight text-zinc-500 sm:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quas.
        </p>
        <Button
          variant={'outline'}
          className="rounded-3xl border-black bg-transparent"
        >
          View Project
        </Button>
      </div>
      <Image
        src={''}
        alt={''}
        className="aspect-square w-full bg-zinc-700 sm:w-1/2"
      />
    </div>
  )
}
