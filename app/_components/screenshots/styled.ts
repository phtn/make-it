import tw from 'tailwind-styled-components'
import Image from 'next/image'

const ScreenShots = tw.div`
  flex-row
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-6
`

const ColLeft = tw.div`
  lg:col-span-2
  lg:flex
  hidden
  items-center
  justify-start
  md:justify-end
  hover:scale-110 
  transform-gpu
  transition-all
  duration-700
`
const ColMid = tw.div`
  lg:col-span-2
  flex
  rounded-[24px]
  items-center
  justify-center
  md:justify-end
  lg:justify-center
  hover:scale-110 
  transform-gpu
  transition-all
  duration-700
  px-4
`
const ColRight = tw.div`
  lg:col-span-2
  md:flex
  hidden
  items-center
  justify-end
  md:justify-center
  lg:justify-start
  hover:scale-110 
  transform-gpu
  transition-all
  duration-700
`

const PhoneImage = tw(Image)<{ src: string }>`
  ${(p) => p.src}

  shadow-lg 
  hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] 
  hover:bg-black/[40%] 
  transition-all duration-1000 
  bg-transparent/0
  w-auto 
  rounded-[58px]
`

export { ScreenShots, ColLeft, ColMid, ColRight, PhoneImage }
