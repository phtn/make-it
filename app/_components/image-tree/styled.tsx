import tw from 'tailwind-styled-components'

const Container = tw.div`
  grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 
`

const Collage = tw.div`
  flex items-center justify-center 
  bg-gradient-to-l from-transparent to-accent/[8%] 
  skew-x-[-32deg] col-span-3 py-24 xl:pb-0
`

export { Container, Collage }
