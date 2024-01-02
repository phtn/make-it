import tw from 'tailwind-styled-components'

const Container = tw.div`
  h-screen
  overflow-scroll
  z-20
`
const Content = tw.div`
  flex-col
  w-full
  bg-gradient-to-tl
  from-[#AEB4EA]
  to-[##FEF7E4]/70
  transition-colors
  duration-1000
  overflow-hidden
  absolute 
  top-0
  z-30
`

export { Container, Content }
