import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  flex
  w-full
  items-center 
  justify-between
  absolute
  top-0
  bg-foreground/30
  dark:bg-background/40
  backdrop-blur-lg
  z-50
  h-[64px]
  md:px-6
`



export { NavContainer }
