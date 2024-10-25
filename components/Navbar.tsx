import Link from 'next/link';
import React, { FC } from 'react'

type NavbarProps = {
  rightSide: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ rightSide }) => {
  return (
    <div className='h-[72px] border-b border-black'>
      <nav className={`flex items-center justify-between max-w-[1312px] mx-auto h-full`}>
        <Link href="/" className='font-bold text-[32px]'>Ponari</Link>

        {rightSide}
      </nav>
    </div>

  )
}

export default Navbar;