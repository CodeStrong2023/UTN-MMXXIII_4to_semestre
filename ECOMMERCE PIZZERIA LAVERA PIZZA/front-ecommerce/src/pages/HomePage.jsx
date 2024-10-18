import React from 'react'
import { Section1Home } from '../components/Home/Section1Home'
import Section2Home from '../components/Home/Section2Home'
import Section3Home from '../components/Home/Section3Home'
import { Section4Home } from '../components/Home/Section4Home'

export const HomePage = () => {
  return (
    <div className='w-[100%] h-full'>
      <Section1Home />
      <Section2Home />
      <Section3Home />
      <Section4Home />
    </div>
  )
}
