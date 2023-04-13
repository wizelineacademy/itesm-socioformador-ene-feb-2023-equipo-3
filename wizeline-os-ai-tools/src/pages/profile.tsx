import GeneralInfo from '@/components/GeneralInfo'
import About from '@/components/About'
import PastWork from '@/components/PastWork'
import Skill from '@/components/Skill'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <GeneralInfo />
      <div className="flex">
        <div className="flex-initial w-800 pl-20 grid grid-cols-1 divide-y divide-x-reverse">
          <div></div>
          <div className="pt-7 pb-5 pr-7">
            <About />
          </div>
          <div className="pr-5 pb-7">
            <PastWork />
          </div>
          <div className="pt-7 pb-7">
            <Skill />
          </div>
        </div>
        <div className="flex-initial w-500 bg-gray-300 pr-20">
          <p className="pl-5 text-2xl font-inter font-semibold pt-7 ">Certifications</p>
        </div>
      </div>
    </>
  )
}

