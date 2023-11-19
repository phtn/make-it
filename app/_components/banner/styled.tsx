import tw from 'tailwind-styled-components'

const Container = tw.div`
  grid grid-cols-1 lg:grid-cols-2 mb-44 bg-gradient-to-br from-slate-700 to-slate-900 
`

const Cell = tw.div`
  h-[150px] sm:h-[200px] md:h-[200px] flex items-center justify-center
`

const Item = tw.div`
  justify-center flex flex-col
`

const Label = tw.h3`
  text-white text-[1rem] sm:text-[1.5rem] font-semibold font-sans mt-[-10px] sm:mt-[-16px]
`

const Value = tw.h1`
  text-primary-foreground text-[2rem] sm:text-[2.6rem] font-extrabold font-sans
`

export { Container, Cell, Item, Label, Value }
