import tw from 'tailwind-styled-components'

const Container = tw.div`
  grid grid-cols-1 lg:grid-cols-2 sm:mb-44 mb-24 bg-gradient-to-br from-slate-700 to-slate-900 
`

const Cell = tw.div`
  h-[150px] sm:h-[200px] md:h-[200px] flex items-center justify-center
`

const Item = tw.div`
  justify-center flex flex-col
`

const Label = tw.h3`
  text-slate-300 text-[1rem] ml-2 sm:text-[1.25rem] font-semibold font-sans mt-[-3px] sm:mt-[-16px]
`

const Value = tw.h1`
  text-primary-foreground text-[2rem] sm:text-[2.25rem] font-bold font-sans
`

export { Container, Cell, Item, Label, Value }
