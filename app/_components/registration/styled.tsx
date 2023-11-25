import { FormLabel } from '@/components/ui/form'
import tw from 'tailwind-styled-components'

const Label = tw(FormLabel)`
  text-[10px] flex items-center font-sans tracking-wide w-fit rounded-t-md px-3 py-1 ml-1 bg-foreground text-background
`

const HeaderTitle = tw.span`
  text-slate-100 font-sans font-extrabold text-[1rem] leading-[1rem]
`
const HeaderContainer = tw.div`
  rounded bg-[url('/bg/meteor-v3.svg')] bg-cover h-16 p-3 flex items-center justify-center
`

const Subheader = tw.div`
  font-sans text-[12px] text-foreground font-medium 
  decoration-primary-foreground underline-offset-4 decoration-[4px] 
  underline mb-4 mt-1 flex justify-center
`

const Header = () => (
	<>
		<HeaderContainer>
			<HeaderTitle>Get Started.</HeaderTitle>
		</HeaderContainer>
		<Subheader>Your journey begins here.</Subheader>
	</>
)

export { Label, Header }
