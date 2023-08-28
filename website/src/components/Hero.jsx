import Image from 'next/image'
import coverImage from '@/images/hero.jpg'
import Link from 'next/link'

export function Hero() {
  return (
    <>
      <header className=" overflow-hidden py-10">
        <div className="px-auto text-center">
          <h1 className="bold text-4xl text-purple-600 sm:text-5xl">
            Welcome to{' '}
            <span className=" sm: block bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-4xl text-5xl font-extrabold uppercase tracking-wide text-transparent sm:inline">
              craftonite
            </span>
          </h1>
        </div>
      </header>
      <content className="mx-auto flex w-5/6 flex-col-reverse items-center gap-3 sm:w-2/3 sm:flex-row sm:items-start sm:gap-10">
        <Image
          width={300}
          height={300}
          src={coverImage}
          alt="craftonite"
          priority
        />
        <div className="flex flex-col items-start gap-3 sm:gap-5">
          <h2 className="text-center text-2xl sm:text-start sm:text-3xl ">
            Here you can find the best videos in the best price for your
          </h2>
          <h3 className="text-1xl text-center sm:text-start sm:text-2xl">
            super long text to convinse you to buy our products and services
          </h3>
        </div>
      </content>
      <Link
        href={'#'}
        className=" mx-auto mt-3 w-40 rounded-md bg-blue-700 p-2 text-center text-white"
      >
        Try now!
      </Link>
    </>
  )
}
