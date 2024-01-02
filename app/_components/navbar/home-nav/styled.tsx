import {
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  ArrowUpRight,
  HelpCircle, HomeIcon,
  LibraryBig,
  Newspaper,
  Star,
  Users2,
} from 'lucide-react'
import tw from 'tailwind-styled-components'
import { TertiaryDetail, TertiaryProps } from './types'
import { Children } from '@/app/types'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const IconContainer = tw.div`
  rounded-full bg-slate-200/10 
	flex items-center justify-center h-[32px] w-[32px] 
	group-hover:h-[24px] group-hover:w-[24px] 
	group-hover:border-slate-100 group-hover:border 
	group-hover:bg-slate-400/30
	transition-all duration-500
`

const PrimaryIcon = () => (
	<IconContainer>
		<LibraryBig className='h-[16px] w-[16px] text-slate-100/50 group-hover:text-white group-hover:h-[14px] group-hover:w-[14px] transition-all duration-500 delay-200' />
	</IconContainer>
)

const PrimaryIndex = tw.span`
  font-mono font-thin text-slate-200/50 text-[2rem] leading-[2rem]
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
	text-slate-50 text-[1rem] 
	group-hover:text-background group-hover:text-[0.95rem]
	pl-2 border-l-4 border-slate-500
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
	relative top-[-140px] backdrop-blur-[10px] bg-accent 
	group-hover:backdrop-blur-[0px] group-hover:bg-transparent
	h-[140px] transition-all duration-700
`

const PrimaryOuter = tw.div`
	w-[160px] h-[140px] rounded-lg overflow-hidden 
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
		<Users2 className='h-[16px] w-[16px] text-slate-500/50 group-hover:text-slate-100 group-hover:h-[14px] group-hover:w-[14px] delay-100 transition-all duration-500 ' />
	</IconContainer>
)

const SecondaryIndex = tw.span`
  font-mono font-thin text-slate-400/50 text-[2rem] leading-[2rem]
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
	pl-2 text-foreground text-[1rem] 
	group-hover:text-white group-hover:text-[0.75rem]
	group-hover:bg-slate-800/40
	border-l-4 border-slate-100
	group-hover:border-primary-foreground
	relative top-[48px] group-hover:top-[-32px]
	transition-all duration-500
	leading-[0.90rem] group-hover:leading-[0.65rem]
	group-hover:py-1
	font-extrabold font-sans w-[96px]
`

const SecondarySubtext = tw.div`
	font-sans font-medium text-[11px] text-foreground
	scale-0 h-0 bg-primary-foreground mt-10 flex 
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
		<SecondarySubtext>
			With{' '}
			<span className='font-extrabold text-[1rem] text-sky-600 px-[3px]'>
				60+
			</span>{' '}
			Global Teams!
		</SecondarySubtext>
	</SecondaryDetails>
)

const SecondaryOuter = tw.div`
  w-[160px] h-[140px] rounded-lg overflow-hidden 
`

const SecondaryInner = tw.div`
	flex flex-col items-stretch justify-between rounded-lg
	relative top-[-140px] backdrop-blur-[16px] bg-primary-foreground
	group-hover:backdrop-blur-[0px] group-hover:bg-transparent
	h-[140px] transition-all duration-700
`

const SecondaryBackdrop = tw.div`
	flex w-[160px] h-[140px]
	bg-[url('/team/team-v2.webp')] bg-cover
	bg-blend-soft-light bg-opacity-5
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

const TopWrapper = tw.div`
	h-[180px] flex items-center justify-evenly
`

const TopSection = () => (
	<TopWrapper>
		<PrimarySet />
		<SecondarySet />
	</TopWrapper>
)

const TertiaryOuter = tw.div`
	h-[50px] flex overflow-hidden
	group-hover:rounded-lg
	group-hover:bg-white transition-all duration-300
`

const TertiaryIconContainer = tw.div`
	w-[50px] flex items-center justify-center
`
const TertiaryContent = tw.div`
	flex flex-col w-[240px] justify-center items-stretch
`
const TertiaryTitle = tw.div`
	flex font-sans items-end font-bold text-[1rem] leading-[1rem] text-foreground dark:text-slate-300 group-hover:dark:text-slate-800 background h-[35px]
`
const TertiarySubtext = tw.div`
	flex font-sans items-start text-[12px] text-slate-700 dark:text-slate-400 h-[25px]
`

const TertiaryDetails = ({ title, subtext }: TertiaryDetail) => (
	<TertiaryContent>
		<TertiaryTitle>{title}</TertiaryTitle>
		<TertiarySubtext>{subtext}</TertiarySubtext>
	</TertiaryContent>
)


const HomepageIcon = () => (
	<TertiaryIconContainer>
		<HomeIcon className='text-foreground/60 group-hover:text-green-500 transition-colors duration-500 h-4 w-4' />
	</TertiaryIconContainer>
)

const FAQsIcon = () => (
	<TertiaryIconContainer>
		<HelpCircle className='text-foreground/60 group-hover:text-green-500 transition-colors duration-500 h-4 w-4' />
	</TertiaryIconContainer>
)

const TestimonialsIcon = () => (
	<TertiaryIconContainer>
		<Star className='text-foreground/60 group-hover:text-orange-500 group-hover:stroke-2 transition-colors duration-500 h-4 w-4' />
	</TertiaryIconContainer>
)

const NewletterIcon = () => (
	<TertiaryIconContainer>
		<Newspaper className='text-foreground/60 group-hover:text-sky-500 transition-colors duration-500 h-4 w-4' />
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

const TertiaryWrapper = tw.div`
	h-[200px] grid grid-rows-4
	bg-slate-200 mx-[16px]
	rounded-lg
`

const GridContent = tw.div`
	grid grid-rows-2 sm:col-span-3 col-span-2 sm:border-r-[0.5px] border-[#c0c1c7] dark:border-slate-800
`
const InnerContent = tw.div`
	grid sm:grid-cols-5 grid-cols-2 sm:w-[616px] w-screen
`

const Home = `
	sm:font-extrabold font-bold font-sans 
	tracking-tighter leading-[1rem] 
	text-transparent text-[1rem] md:text-[1.5rem] 
	bg-clip-text bg-gradient-to-br from-primary-foreground via-accent to-background dark:to-indigo-50
`

const NotHome = `
	sm:font-extrabold font-bold font-sans 
	tracking-tighter leading-[1rem] 
	text-transparent text-[1rem] md:text-[1.5rem] 
	bg-clip-text bg-gradient-to-br from-primary-foreground to-background
`

const Sub = tw.h1`
	h-[20px] w-fit ml-2
	text-xs text-transparent md:text-[18px]
	font-thin font-sans mt-[8px]
	bg-clip-text bg-gradient-to-br from-indigo-300 to-cyan-100
	decoration-background/50
`
const MenuTrigger = tw(NavigationMenuTrigger)`
	bg-transparent
`
const Trigger = () => {
	const pathName = usePathname()
	return (
		<MenuTrigger>
			<h1 className={cn(pathName !== '/' ? NotHome : Home)}>
				Make it in Australia
			</h1>
			<Sub>PH</Sub>
		</MenuTrigger>
	)
}

const MenuContent = tw(NavigationMenuContent)`
	bg-[url('/bg/space-noise-v4.svg')] bg-cover dark:bg-slate-700
`
const HomeMenuContent = ({ children }: Children) => (
	<MenuContent>
		<InnerContent>{children}</InnerContent>
	</MenuContent>
)

export {
	FAQsIcon,
	GridContent,
	HomeMenuContent,
	HomepageIcon,
	NewletterIcon,
	PrimarySet,
	SecondarySet,
	TertiaryIconContainer,
	TertiaryLink,
	TertiaryOuter,
	TertiaryWrapper,
	TestimonialsIcon,
	TopSection,
	Trigger,
}
