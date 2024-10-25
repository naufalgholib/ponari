import React, { FC } from 'react'

type IconHiglightProps = {
  icon: React.ReactNode;
  text: string;
}

const IconHiglight: FC<IconHiglightProps> = ({ icon, text }) => {
  return (
    <div className='flex gap-3 items-center'>
      {icon}
      <p className='text-[22px] font-bold'>{text}</p>
    </div>
  )
}

export default IconHiglight;