import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import Link from 'next/link';
import React, { FC } from 'react'


const Home: FC = ({ }) => {
  return (
    <>
      <Navbar rightSide={
        <div className='flex gap-[16px]'>
          <Link href="/login" className='h-[40px] w-[99px] border border-black flex items-center justify-center hover:bg-slate-50 transition-all'>Login</Link>
          <Link href="/sign-up" className='h-[40px] w-[99px] border border-black bg-black text-white flex items-center justify-center hover:bg-opacity-80 transition-all'>Sign Up</Link>
        </div>}
      />
      <Hero />
      <Providers />
      <Footer />
    </>
  )
}

export default Home;