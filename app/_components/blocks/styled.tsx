import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

const GridContainer = tw.div`
  grid md:grid-cols-4 grid-cols-2
`

const Cell = tw.div`
  h-64 border p-6 flex flex-col items-stretch justify-between
`

const HeaderContent = tw.header`
  text-[1.5rem] leading-[1.5rem] font-sans font-bold mb-1
`
const Title = ({ title }: { title: string }) => (
	<HeaderContent>{title}</HeaderContent>
)

const IntroContent = tw.p`
  text-sm font-sans
`

const Intro = ({ intro }: { intro: string }) => (
	<IntroContent>{intro}</IntroContent>
)

const Action = tw(Button)`
  self-end text-sm
`

export { GridContainer, Cell, Title, Intro, Action }
