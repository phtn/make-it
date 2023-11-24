import { FormLabel } from '@/components/ui/form'
import tw from 'tailwind-styled-components'

const Label = tw(FormLabel)`
  text-[10px] flex items-center font-sans tracking-wide w-fit rounded-t-md px-3 py-1 ml-1 bg-foreground text-background
`

const HeaderTitle = tw.span`
  text-slate-100 font-sans font-extrabold text-[1rem] leading-[1rem]
`
const HeaderContainer = tw.div`
  rounded bg-[url('/svg/meteor-v1.svg')] bg-cover h-16 p-3 flex items-center justify-center
`

const Header = () => (
	<HeaderContainer>
		<HeaderTitle>Get Started.</HeaderTitle>
	</HeaderContainer>
)

export { Label, Header }
