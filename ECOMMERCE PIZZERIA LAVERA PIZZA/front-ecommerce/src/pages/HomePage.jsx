import React from 'react'
import { Section1Home } from '../components/Home/Section1Home'
import Section2Home from '../components/Home/Section2Home'
import Section3Home from '../components/Home/Section3Home'
import { Section4Home } from '../components/Home/Section4Home'
import { Section5Home } from '../components/Home/Section5Home'
import Section6Home from '../components/Home/Section6Home'
import {productsService} from '../api/axios/services'

export const HomePage = () => {
  return (
    <div className='w-[100%] h-full'>
      <Section1Home />
      <Section2Home />
      <Section4Home />
      <Section5Home />
      <Section6Home />
    </div>
  )
}
