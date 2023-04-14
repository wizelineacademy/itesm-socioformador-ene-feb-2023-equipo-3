import GeneralInfo from '@/components/GeneralInfo'
import About from '@/components/About'
import PastWork from '@/components/PastWork'
import Skill from '@/components/Skill'
import Certification from '@/components/Certification'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <GeneralInfo />
      <div className="lg:flex divide-x">
        <div className="flex-initial w-3/4 pl-20 grid grid-cols-1 divide-y divide-x-reverse">
          <span></span>
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
        <div className="flex-initial w-1/4  mr-20 divide-y">
          <span></span>
          < div className="pl-5 pt-7 ">
            <Certification />
          </div>
        </div>
      </div>
    </>
  )
}

