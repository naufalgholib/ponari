import FooterAuth from '@/components/FooterAuth';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { FC } from 'react'

const page: FC = ({ }) => {
  return (
    <>
      <Navbar rightSide={<p className='text-[16px]'>Don&apos;t have an account? <Link href="sign-up" className='underline'>Sign Up</Link></p>} />
      <LoginForm />
      <FooterAuth />
    </>
  )
}

export default page;