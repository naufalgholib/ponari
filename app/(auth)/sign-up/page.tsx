import FooterAuth from '@/components/FooterAuth';
import Navbar from '@/components/Navbar';
import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';
import React, { FC } from 'react'

const page: FC = ({ }) => {
  return (
    <>
      <Navbar rightSide={<p className='text-[16px]'>Already have an account? <Link href="/login" className='underline'>Log In</Link></p>} />
      <SignUpForm />
      <FooterAuth />
    </>
  )
}

export default page;