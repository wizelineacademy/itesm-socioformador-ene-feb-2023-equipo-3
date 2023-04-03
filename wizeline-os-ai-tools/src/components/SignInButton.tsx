'use client'

import { LogIn, Sun } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { FC , useState} from 'react'
import { Button, buttonVariants } from './ui/Button'
import { toast } from './ui/Toast'
import Image from 'next/image'

interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle  = async() => {
    setIsLoading(true)

    try {
        await signIn('google')
    }catch(error){
        toast({
            title: 'Error signing in',
            message: 'Please try again later',
            type: 'error',
        })
    }
    
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading} className={buttonVariants({variant: 'logIn', size: 'logIn'})}>
      <object data="/images/googleIcon.svg" className='h-10'></object>
      <p className=''>Continue with Google</p>
    </Button>
  )
}

export default SignInButton
