import Head from 'next/head'
import Image from 'next/image'
import SignInButton from '@/components/SignInButton'
import Paragraph from '@/components/ui/Paragraph'
// testing portion
import Skill from '@/components/Skill'
import MySkills from '@/components/Skill'


export default function Home() {
  return (
    <>
      <Head>
        <title>Wizeline OS</title>
        <meta name="Wizeline OS" content="Sign In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen bg-slate-50 antialiased'>
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
          <div className='w-1/2 h-full flex flex-col'>
            <div className='flex justify-end mt-8 mr-8'>
              <img className='h-8' src="/images/wizelinelogo.png" alt="" />
            </div>
            <div className='w-full px-6 flex justify-center mt-[25vh]'>
              <div className='bg-transparent md:mt-0 sm:max-w-md xl:p-0'>
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

        </div>

      </main>
    </>
  )
}


/*
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
          <div className='flex flex-col align-middle justify-center px-6 py-8 md:h-screen lg:py-0 w-1/2'>
            <div className=' bg-red-400 my-4 ml-auto'>
              <img className='h-8' src="/images/wizelinelogo.png" alt="" />
            </div>
            <div className='w-full bg-transparent md:mt-0 sm:max-w-md xl:p-0 bg-orange-400 my-auto mx-auto'>
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

*/