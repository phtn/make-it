import tw from 'tailwind-styled-components'
import Image from 'next/image'

const DownloadPanel = tw.div`
  z-30 flex flex-col md:items-center justify-center h-[600px] md:h-[700px] px-6
`

const DownloadTitle = tw.h2`
  text-[2rem] ml-2 md:text-[4rem] font-extrabold text-primary-foreground z-10 
`

const StorePanel = tw.section`
  md:pt-24
  py-8
  grid grid-cols-1
  md:grid-cols-3
  md:px-24
  px-16
  gap-12
  items-center
  justify-center
`

const StoreImage = tw(Image)<{ src: string }>`
  ${({ src }) => src}

  h-10
  w-36
`

const StoreLink = tw.div`
  z-30
  py-3
  px-5
  flex
  bg-cover
  rounded-md
  bg-no-repeat
  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] 
  bg-black
  md:dark:border-[1px]
  dark:border-[0.5px]
  border-bg-primary/5
  hover:border-primary-foreground
  hover:scale-[102%]
  transition-all
  duration-500
  overflow-hidden
  items-center
  justify-center
`

export { DownloadPanel, DownloadTitle, StorePanel, StoreLink, StoreImage }
