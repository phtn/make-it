import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { HelpCircle, LibraryBig, Newspaper, Star, Users2 } from 'lucide-react'
import tw from 'tailwind-styled-components'
import { TertiaryDetail, TertiaryProps } from './types'

const IconContainer = tw.div`
  rounded-full bg-slate-100/5 flex self-start items-center justify-center h-[32px] w-[32px] 
`

const PrimaryIcon = () => (
	<IconContainer>
		<LibraryBig className='text-slate-600 group-hover:text-slate-400 delay-300 transition-all duration-500 h-[16px] w-[16px]' />
	</IconContainer>
)

const PrimaryIndex = tw.span`
  font-mono font-thin text-slate-600 text-[2rem] leading-[2rem]
`

const PrimaryTopContainer = tw.div`
  flex justify-between items-center w-[140px]
`

const PrimaryTop = () => (
	<PrimaryTopContainer>
		<PrimaryIndex>01</PrimaryIndex>
		<PrimaryIcon />
	</PrimaryTopContainer>
)

const PrimaryTitle = tw.span`
	text-slate-200 text-[1rem] 
	pl-2 border-l-4 border-slate-500/50 
	group-hover:border-slate-300 group-hover:text-[0.85rem] 
	transition-all duration-300 delay-200 
	leading-[0.85rem] font-extrabold w-[100px]
`

const PrimarySubtext = tw.div`
	font-sans text-[10px] text-slate-800
	scale-0 h-0 bg-slate-300 mt-2 flex 
	items-center justify-center rounded w-full  
	group-hover:text-slate-800 group-hover:scale-100 
	group-hover:h-6 transition-all duration-300 delay-100 
`

const PrimaryDetails = tw.div`
	flex flex-col
`

const PrimaryContent = () => (
	<PrimaryDetails>
		<PrimaryTitle>About Our Company</PrimaryTitle>
		<PrimarySubtext>What we're all about.</PrimarySubtext>
	</PrimaryDetails>
)

const PrimaryInner = tw.div`
	flex flex-col items-stretch justify-between rounded-lg
`

const PrimaryOuter = tw.div`
	flex w-[160px] h-[140px] bg-slate-800 p-2 rounded-lg overflow-hidden 
`

const PrimarySet = () => (
	<NavigationMenuLink
		href='/about-the-company'
		className='no-underline rounded-lg group shadow-md'>
		<PrimaryOuter>
			<PrimaryInner>
				<PrimaryTop />
				<PrimaryContent />
			</PrimaryInner>
		</PrimaryOuter>
	</NavigationMenuLink>
)

const SecondaryIcon = () => (
	<IconContainer>
		<Users2 className='text-slate-800 group-hover:text-slate-100 delay-300 transition-all duration-500 h-[16px] w-[16px]' />
	</IconContainer>
)

const SecondaryIndex = tw.span`
  font-mono font-thin text-slate-800/20 text-[2rem] leading-[2rem]
`

const SecondaryTopContainer = tw.div`
  flex justify-between items-center w-[140px]
`

const SecondaryTop = () => (
	<SecondaryTopContainer>
		<SecondaryIndex>02</SecondaryIndex>
		<SecondaryIcon />
	</SecondaryTopContainer>
)

const SecondaryTitle = tw.span`
	text-slate-800 text-[1rem] 
	pl-2 border-l-4 border-slate-800/50 
	group-hover:border-slate-300 group-hover:text-[0.85rem] 
	transition-all duration-300 delay-100 
	leading-[0.85rem] font-extrabold w-[100px]
`

const SecondarySubtext = tw.div`
	font-sans text-[10px] text-slate-800
	scale-0 h-0 bg-slate-800 mt-2 flex 
	items-center justify-center rounded w-full  
	group-hover:text-slate-200 group-hover:scale-100 
	group-hover:h-6 transition-all duration-300 delay-100 
`

const SecondaryDetails = tw.div`
	flex flex-col
`

const SecondaryContent = () => (
	<SecondaryDetails>
		<SecondaryTitle>Meet Our Team</SecondaryTitle>
		<SecondarySubtext>With 60+ Global Teams.</SecondarySubtext>
	</SecondaryDetails>
)

const SecondaryOuter = tw.div`
  flex w-[160px] h-[140px] bg-[#fd5c63] rounded-lg p-2 overflow-clip 
`

const SecondarySet = () => (
	<NavigationMenuLink
		href='/meet-the-team'
		className='no-underline group rounded-lg shadow-lg'>
		<SecondaryOuter>
			<PrimaryInner>
				<SecondaryTop />
				<SecondaryContent />
			</PrimaryInner>
		</SecondaryOuter>
	</NavigationMenuLink>
)

const TertiaryOuter = tw.div`
	h-[54px] mx-[14px] 
	flex rounded overflow-hidden 
	group-hover:bg-white
`

const TertiaryIconContainer = tw.div`
	w-[54px] flex items-center justify-center
`
const TertiaryContent = tw.div`
	flex flex-col w-[272px] justify-center items-stretch
`
const TertiaryTitle = tw.div`
	flex font-sans items-end font-bold text-[1rem] text-slate-800 h-[35px]
`
const TertiarySubtext = tw.div`
	flex font-sans items-start text-[10px] text-slate-600 h-[25px]
`

const TertiaryDetails = ({ title, subtext }: TertiaryDetail) => (
	<TertiaryContent>
		<TertiaryTitle>{title}</TertiaryTitle>
		<TertiarySubtext>{subtext}</TertiarySubtext>
	</TertiaryContent>
)

const FAQsIcon = () => (
	<TertiaryIconContainer>
		<HelpCircle className='text-slate-500 group-hover:text-green-500 transition-colors duration-500 h-5 w-5' />
	</TertiaryIconContainer>
)

const TestimonialsIcon = () => (
	<TertiaryIconContainer>
		<Star className='text-slate-500 group-hover:text-orange-500 group-hover:stroke-2 transition-colors duration-500 h-5 w-5' />
	</TertiaryIconContainer>
)

const NewletterIcon = () => (
	<TertiaryIconContainer>
		<Newspaper className='text-slate-500 group-hover:text-sky-500 transition-colors duration-500 h-5 w-5' />
	</TertiaryIconContainer>
)

const TertiaryLink = ({ href, icon, details }: TertiaryProps) => (
	<NavigationMenuLink
		href={href}
		className='no-underline group'>
		<TertiaryOuter>
			{icon}
			<TertiaryDetails {...details} />
		</TertiaryOuter>
	</NavigationMenuLink>
)

export {
	PrimarySet,
	SecondarySet,
	TertiaryLink,
	TertiaryOuter,
	TertiaryIconContainer,
	FAQsIcon,
	TestimonialsIcon,
	NewletterIcon,
}
