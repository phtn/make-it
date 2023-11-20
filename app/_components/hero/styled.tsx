import Image, { ImageProps } from 'next/image'
import tw from 'tailwind-styled-components'

const HeroContainer = tw.div`
  h-fit
`

const HeroContent = tw.div`
  h-fit
  md:h-screen
  z-20
  justify-center
  grid
  md:grid-cols-2
  grid-cols-1
`

const HeroPrimary = tw.div`
  flex items-center justify-center sm:pb-16 
  pt-24 sm:pt-36 h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px]
`
const PrimaryContent = tw.div`
  flex flex-col justify-evenly h-[400px] md:h-[450px] lg:h-[300px] 
  px-8 sm:pl-24 lg:pl-32 lg:pr-14 z-40
`

const Title = tw.div`
  font-sans px-3 py-3 ml-3 font-bold text-[1.5rem] w-fit 
  text-primary-foreground bg-slate-800 leading-[1.5rem]
  rounded
`
const Subheader = tw.div`
  sm:text-[1.2rem] px-3 py-2
  justify-center text-slate-800 w-fit
  bg-primary-foreground rounded 
  font-sans font-medium
`

const HeadlineText = tw.h1`
  text-[2rem] text-foreground 
  sm:text-[2.5rem] lg:text-[3rem]  
  leading-[2rem] md:leading-[3rem]
  tracking font-bold font-sans
  sm:py-3 
`

const HeadlineDot = tw.h1`
  text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]  
  leading-[2rem] md:leading-[3.25rem]
  tracking font-bold font-sans
  text-[#54c8e8]
`
const HeadlineContainer = tw.div`
  flex
  md:h-fit
  sm:w-96 md:w-[500px]
`

const HeadlineContent = ({ headline }: { headline: string }) => (
	<HeadlineContainer>
		<HeadlineText>{headline}</HeadlineText>
		<HeadlineDot>.</HeadlineDot>
	</HeadlineContainer>
)

const SubtextContainer = tw.div`
  flex items-center border-l-8 border-[#54c8e8] px-4 ml-[-18px] h-[72px]
`
const SubtextContent = tw.h2`
  text-[0.75rem] sm:text-sm 
  text-muted-foreground
  font-normal tracking-wide 
`

const Subtext = ({ subtext }: { subtext: string }) => (
	<SubtextContainer>
		<SubtextContent>{subtext}</SubtextContent>
	</SubtextContainer>
)

const HeroSecondary = tw.div`
  md:h-screen
  md:flex
  h-fit
  lg:pr-16
`

const WaveOne = tw.div`
  z-50
  w-screen 
  h-full
  xl:bg-contain
  bg-contain
  bg-no-repeat
  bg-[url('/svg/outsourcee-waves-v2.svg')]
  absolute
  xl:top-[calc(100vh-270px)]
  lg:top-[calc(100vh-200px)]
  md:top-[calc(100vh-164px)]
  top-[calc(100vh-80px)]
  xl:mb-[-65px]
`

const FooterContent = tw.div`
  relative flex items-end justify-end h-[270px] p-3 z-50
`
const FooterItem = tw.h3`
  text-xs text-muted dark:text-foreground/20 font-medium
  tracking-wide
`

export {
	FooterContent,
	FooterItem,
	HeadlineContent,
	HeroContainer,
	HeroContent,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	Subtext,
	WaveOne,
	HeadlineText,
	Title,
	Subheader,
}
