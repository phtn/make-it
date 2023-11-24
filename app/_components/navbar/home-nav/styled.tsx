import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import {
	ArrowUpRight,
	HelpCircle,
	LibraryBig,
	Newspaper,
	Star,
	Users2,
} from 'lucide-react'
import tw from 'tailwind-styled-components'
import { TertiaryDetail, TertiaryProps } from './types'

const IconContainer = tw.div`
  rounded-full bg-slate-400/10 
	flex items-center justify-center h-[32px] w-[32px] 
	group-hover:h-[24px] group-hover:w-[24px] 
	group-hover:border-slate-100 group-hover:border 
	group-hover:bg-slate-400/30
	transition-all duration-500
`

const PrimaryIcon = () => (
	<IconContainer>
		<LibraryBig className='h-[16px] w-[16px] text-slate-800 group-hover:text-white group-hover:h-[14px] group-hover:w-[14px] transition-all duration-500 delay-200' />
	</IconContainer>
)

const PrimaryIndex = tw.span`
  font-mono font-thin text-slate-500 text-[2rem] leading-[2rem]
	group-hover:scale-0 transition-all duration-500
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
	text-card-foreground text-[1rem] 
	group-hover:text-background group-hover:text-[0.95rem]
	pl-2 border-l-4 border-orange-500 
	group-hover:border-[#54c8e8]
	relative top-[48px] group-hover:top-[-32px]
	transition-all duration-500
	leading-[0.90rem] group-hover:leading-[0.85rem]
	font-extrabold font-sans w-[120px]
`

const PrimarySubtext = tw.div`
	font-sans font-medium text-[11px] text-white
	scale-0 h-0 bg-[#54c8e8] mt-10 flex 
	flex-row items-center justify-center 
	rounded-md w-full py-1
	group-hover:text-slate-800 group-hover:scale-100 
	group-hover:h-6 transition-all duration-300
`

const PrimaryDetails = tw.div`
	flex flex-col
`

const PrimaryContent = () => (
	<PrimaryDetails>
		<PrimaryTitle>About Our Company</PrimaryTitle>
		<PrimarySubtext>
			<span>What we&apos;re all about.</span>

			<ArrowUpRight className='ml-1 h-[14px] w-[14px] text-[#54c8e8] group-hover:text-white group-hover:stroke-[2px] transition-all duration-300 delay-700' />
		</PrimarySubtext>
	</PrimaryDetails>
)

const PrimaryInner = tw.div`
	flex flex-col items-stretch justify-between rounded-lg
	relative top-[-140px] backdrop-blur-[10px] bg-white/40
	h-[140px] group-hover:backdrop-blur-[0px] group-hover:bg-transparent
	transition-all duration-700
`

const PrimaryOuter = tw.div`
	w-[160px] h-[140px] rounded-lg overflow-hidden 
	bg-left bg-gradient-to-br from-slate-100 to-slate-200/20 
`

const Content = tw.div`
	m-2
`

const PrimaryBackdrop = tw.div`
	flex w-[160px] h-[140px]
	bg-[url('/bg/sydney-v1.webp')] bg-cover
	group-hover:bg-blend-soft-light bg-blend-lighten	
	scale-150 group-hover:scale-100 
	transition-transform duration-700
`

const PrimarySet = () => (
	<NavigationMenuLink
		href='/about-the-company'
		className='no-underline rounded-lg group shadow-md'>
		<PrimaryOuter>
			<PrimaryBackdrop />
			<PrimaryInner>
				<Content>
					<PrimaryTop />
					<PrimaryContent />
				</Content>
			</PrimaryInner>
		</PrimaryOuter>
	</NavigationMenuLink>
)

const SecondaryIcon = () => (
	<IconContainer>
		<Users2 className='h-[16px] w-[16px] text-slate-100 group-hover:text-slate-100 group-hover:h-[14px] group-hover:w-[14px] delay-100 transition-all duration-500 ' />
	</IconContainer>
)

const SecondaryIndex = tw.span`
  font-mono font-thin text-slate-100 text-[2rem] leading-[2rem]
	group-hover:scale-0 transition-all duration-500
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
	pl-2 text-card text-[1rem] 
	group-hover:text-white group-hover:text-[0.95rem]
	group-hover:bg-slate-800/40
	border-l-4 border-[#54c8e8] 
	group-hover:border-pink-400
	relative top-[48px] group-hover:top-[-32px]
	transition-all duration-500
	leading-[0.90rem] group-hover:leading-[0.85rem]
	font-extrabold font-sans w-[90px]
`

const SecondarySubtext = tw.div`
	font-sans font-medium text-[11px] text-white
	scale-0 h-0 bg-pink-400 mt-10 flex 
	flex-row items-center justify-center 
	rounded-md w-full py-1
	group-hover:text-slate-800 group-hover:scale-100 
	group-hover:h-6 transition-all duration-300
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
  w-[160px] h-[140px] rounded-lg overflow-hidden 
	bg-left bg-gradient-to-br from-slate-100 to-slate-200/20  
`

const SecondaryInner = tw.div`
	flex flex-col items-stretch justify-between rounded-lg
	relative top-[-140px] backdrop-blur-[16px] bg-sky-900/50
	h-[140px] group-hover:backdrop-blur-[0px] group-hover:bg-transparent
	transition-all duration-700
`

const SecondaryBackdrop = tw.div`
	flex w-[160px] h-[140px]
	bg-[url('/bg/team-v1.webp')] bg-cover
	group-hover:bg-blend-soft-light bg-blend-darken	
	scale-150 group-hover:scale-100 
	transition-transform duration-700
`

const SecondarySet = () => (
	<NavigationMenuLink
		href='/meet-the-team'
		className='no-underline group rounded-lg shadow-lg'>
		<SecondaryOuter>
			<SecondaryBackdrop />
			<SecondaryInner>
				<Content>
					<SecondaryTop />
					<SecondaryContent />
				</Content>
			</SecondaryInner>
		</SecondaryOuter>
	</NavigationMenuLink>
)

const TertiaryOuter = tw.div`
	h-[56px] mx-[14px] flex overflow-hidden 
	group-hover:rounded-lg 
	group-hover:bg-white transition-all duration-300
`

const TertiaryIconContainer = tw.div`
	w-[54px] flex items-center justify-center
`
const TertiaryContent = tw.div`
	flex flex-col w-[272px] justify-center items-stretch
`
const TertiaryTitle = tw.div`
	flex font-sans items-end font-bold text-[1rem] text-slate-800 dark:text-slate-300 group-hover:dark:text-slate-800 background h-[35px]
`
const TertiarySubtext = tw.div`
	flex font-sans items-start text-[12px] text-slate-600 dark:text-slate-400 h-[25px]
`

const TertiaryDetails = ({ title, subtext }: TertiaryDetail) => (
	<TertiaryContent>
		<TertiaryTitle>{title}</TertiaryTitle>
		<TertiarySubtext>{subtext}</TertiarySubtext>
	</TertiaryContent>
)

const FAQsIcon = () => (
	<TertiaryIconContainer>
		<HelpCircle className='text-accent group-hover:text-green-500 transition-colors duration-500 h-6 w-6' />
	</TertiaryIconContainer>
)

const TestimonialsIcon = () => (
	<TertiaryIconContainer>
		<Star className='text-accent group-hover:text-orange-500 group-hover:stroke-2 transition-colors duration-500 h-6 w-6' />
	</TertiaryIconContainer>
)

const NewletterIcon = () => (
	<TertiaryIconContainer>
		<Newspaper className='text-accent group-hover:text-sky-500 transition-colors duration-500 h-5 w-5' />
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
