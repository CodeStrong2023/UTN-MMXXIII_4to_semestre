import React from 'react'
import {Section1Menu} from '../components/Menu/Section1Menu'
import {Section2Menu} from '../components/Menu/Section2Menu'
import {Section3Menu} from '../components/Menu/Section3Menu'
import {Section4Menu} from '../components/Menu/Section4Menu'
import {Section5Menu} from '../components/Menu/Section5Menu'

export const MenuPage = () => {
  return (
    <div className='w-[100%] h-full'>
      <Section1Menu />
      <Section2Menu />
      <Section3Menu />
      <Section5Menu />
      <Section4Menu />
    </div>
  )
}