import Image from 'next/image';
import React, { FC } from 'react'
import ProvidersImage from '@/public/img/providers.jpg';
import Link from 'next/link';


const Providers: FC = ({ }) => {
  return (
    <section className='max-w-[1312px] mx-auto flex flex-col items-center justify-center py-[112px]'>
      <div className='flex flex-col gap-6 w-[768px] text-center mb-16'>
        <h2 className='font-bold text-[48px]'>Leading healthcare providers</h2>
        <p className='text-[18px]'>Ponari provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
        <div className='flex flex-col justify-center items-center'>

          <Link href="/" className='w-[129px] h-[48px] border border-black flex items-center justify-center hover:bg-slate-50 transition-all'>Learn more</Link>
        </div>
      </div>

      <Image
        src={ProvidersImage}
        alt='Image'
        height={700}
        width={1312}
        className='h-[700px] w-[1312px] object-cover'
      />
    </section>
  )
}

export default Providers;