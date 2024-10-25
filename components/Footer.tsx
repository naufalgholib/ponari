import Link from 'next/link';
import React, { FC } from 'react'

const Footer: FC = ({ }) => {
  return (
    <footer className='max-w-[1312px] mx-auto py-[80px]'>
      <div className='h-[54px] border-t border-black pt-8 flex justify-center gap-[24px]'>
        <p className='text-[14px]'>© 2023 Ponari. All right reserved.</p>
        <Link href="/" className='text-[14px] underline'>Privacy Policy</Link>
        <Link href="/" className='text-[14px] underline'>Terms of Service</Link>
        <Link href="/" className='text-[14px] underline'>Cookies Settings</Link>
      </div>
    </footer>
  )
}

export default Footer;