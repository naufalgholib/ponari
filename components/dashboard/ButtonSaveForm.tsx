import React, { FC } from 'react'

type ButtonSaveFormProps = {
  onClick?: () => void;
}

const ButtonSaveForm: FC<ButtonSaveFormProps> = ({ onClick }) => {
  return (
    <button
      className="w-full h-[48px] bg-black text-white hover:bg-opacity-80 transition-all mt-8"
      onClick={onClick}
      type='submit'
    >
      Save
    </button>
  )
}

export default ButtonSaveForm