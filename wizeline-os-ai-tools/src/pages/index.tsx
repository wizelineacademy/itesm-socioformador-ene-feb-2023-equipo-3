import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SignInButton from '@/components/SignInButton'
import Paragraph from '@/components/ui/Paragraph'
// testing portion
import Skill from '@/components/Skill'
import MySkills from '@/components/Skill'


//const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Wizeline OS</title>
        <meta name="description" content="Log In" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <div className='w-full h-screen flex items-start'>
          <div className='relative w-1/2 h-full flex flex-col'>
            <Image
                    priority
                    className='w-full h-full object-cover'
                    quality={100}
                    fill
                    src='/images/people.jpeg'
                    alt=' side cover image'
                  />
          </div>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <div className='w-full bg-transparent md:mt-0 sm:max-w-md xl:p-0'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className="text-3xl font-bold text-center leading-tight tracking-tight text-gray-900">
                  Welcome back
                </h1>
                <Paragraph>
                  Please log in with your Google account to access to Wizeline OS
                </Paragraph>
                <SignInButton/>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
