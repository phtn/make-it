import { MoonStarIcon, SunIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  flex
  w-full
  items-center 
  justify-between
  absolute
  top-0
  bg-foreground/20
  backdrop-blur-lg
  z-50
  h-[64px]
`

const Brand = tw.section`
  flex
  items-center
  justify-evenly
  px-3
`

const BrandName = tw.h1`
  font-extrabold
  text-xl
  md:text-3xl
`

const MoonStar = tw(MoonStarIcon)`
  h-4 w-4
`

const Sun = tw(SunIcon)`
  h-4 w-4
`

export { Brand, BrandName, NavContainer, MoonStar, Sun }
