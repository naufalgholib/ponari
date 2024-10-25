import React, { FC } from 'react'
import Jumbotron from './Jumbotron';
import Services from './Services';


const Hero: FC = ({ }) => {
  return (
    <>
      <Jumbotron />
      <Services />
    </>
  )
}

export default Hero;