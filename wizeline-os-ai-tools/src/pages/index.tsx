import Head from 'next/head'
import Image from 'next/image'
import SignInButton from '@/components/SignInButton'
import Paragraph from '@/components/ui/Paragraph'
import { Certificate } from 'crypto'
import FormComponent from '@/components/Form/FormComponent'

export default function Home() {
  return (
    <div>
      <FormComponent/>
    </div>
  )
}