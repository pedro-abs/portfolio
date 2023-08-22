import { Button } from '@/components/ui/button'
import Image from 'next/image'

import img from '@/assets/imageBg.svg'

export default function Home() {
  return (
    <>
      <section className="flex max-h-min flex-col-reverse items-center justify-between gap-8 px-4 py-8 sm:flex-row sm:gap-0 sm:px-[10%]">
        <div className="flex w-full max-w-sm flex-col justify-evenly space-y-2">
          <span className="text-light-accent text-center text-xl leading-none sm:text-start">
            DEVELOPER FRONT-END
          </span>
          <h1 className="text-center font-serif text-4xl font-semibold leading-none sm:text-start">
            Hello, my name <br /> is Pedro Augusto
          </h1>
          <p className="text-light-secondary dark:text-dark-secondary text-center text-lg font-light leading-none sm:w-11/12 sm:text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            cupiditate laborum ut saepe eligendi obcaecati debitis modi iusto
            commodi officia?
          </p>
          <div className="flex justify-center space-x-2 sm:justify-start">
            <Button className="bg-light-accent text-dark-primary hover:bg-light-accent-hover rounded-md hover:cursor-not-allowed">
              Projects
            </Button>
            <Button
              className="border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary rounded-md bg-transparent hover:cursor-not-allowed"
              variant={'outline'}
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-80 max-w-xs">
          <Image src={img} alt={''} className="absolute aspect-square w-full" />
        </div>
      </section>
      <section className="space-y-10 px-4 py-8 sm:px-[10%]">
        <h3 className="text-center font-serif text-4xl font-bold">Projects</h3>
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
    <div className="dark:bg-dark-bg-spc flex w-full max-w-2xl flex-col-reverse overflow-hidden rounded-xl bg-white shadow sm:flex-row sm:even:flex-row-reverse">
      <div className="flex h-auto w-full flex-col items-center justify-center space-y-4 p-8 sm:w-1/2 sm:items-start">
        <h4 className="text-center font-serif text-2xl font-bold sm:text-start">
          Project Name
        </h4>
        <p className="text-light-secondary dark:text-dark-secondary text-center font-normal leading-tight sm:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quas.
        </p>
        <Button
          variant={'outline'}
          className="border-light-primary dark:border-dark-primary rounded-3xl bg-transparent hover:cursor-not-allowed"
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
