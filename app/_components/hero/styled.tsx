import tw from 'tailwind-styled-components'

const Container = tw.div`
  h-fit
`

const Content = tw.div`
  h-fit
  md:h-screen
  z-20
  justify-center
  grid
  md:grid-cols-2
  grid-cols-1
  px-3
`

const TerranContent = tw.div`
  h-fit
  xl:h-screen
  z-20
  justify-center
  grid
  grid-cols-1
  xl:grid-cols-2
`

const TerranPrimary = tw.div`
  flex items-center justify-center sm:pb-16
  pt-24 sm:pt-14 h-[550px] sm:h-[600px] md:h-[700px] 
  lg:h-screen
`

const TerranPrimaryContent = tw.div`
  flex flex-col h-[400px] md:h-[450px] lg:h-[400px] 
  px-8 sm:pl-24 lg:pl-32 lg:pr-14 z-40
`

const HeroPrimary = tw.div`
  flex items-center justify-center sm:pb-16 
  pt-24 sm:pt-36 h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px]
`
const PrimaryContent = tw.div`
  flex flex-col justify-evenly h-[400px] md:h-[450px] lg:h-[400px] 
  px-8 sm:pl-24 lg:pl-32 lg:pr-14 z-40
`

const Title = tw.div`
  font-sans px-3 py-3 ml-3 font-bold text-[1.5rem] w-fit 
  text-transparent bg-clip-text bg-[url('/bg/meteor-v2.svg')] bg-cover leading-[1.5rem]
  rounded shadow-xl shadow-foreground/30
`
const TitleXL = tw.div`
  font-sans py-6 ml-3 font-extrabold w-fit
  text-[1.5rem] md:text-[3rem] md:w-[300px]
  leading-[3rem]
`
const TitleClip = tw.div`
  text-transparent bg-clip-text bg-[url('/bg/meteor-v3.svg')] bg-cover
`
const Subheader = tw.div`
  sm:text-[1rem] px-3 py-2
  justify-center text-slate-800 w-fit
  bg-primary-foreground rounded 
  font-sans font-bold
  shadow-xl shadow-foreground/10
`
const SubheaderXL = tw.div`
  px-8 py-2 h-[55px] mb-4
  text-[1rem] text-slate-800 md:text-[1.25rem]
  flex items-center justify-center w-fit
  bg-gradient-to-br from-accent to-white
  rounded-md font-sans font-sans
`

const HeadlineText = tw.h1`
  text-[1.75rem] text-foreground 
  sm:text-[2.5rem] lg:text-[3rem]  
  leading-[1.75rem] md:leading-[3rem]
  tracking font-bold font-sans
  sm:py-1
`

const HeadlineDot = tw.h1`
  text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]  
  leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem]
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
  flex items-center border-l-8 border-[#54c8e8] 
  px-4 ml-[-18px] h-[72px] w-80 md:w-96 sm:w-[450px] md:h-[96px]
`
const SubtextContent = tw.h2`
  text-[0.75rem] sm:text-sm 
  text-muted-foreground
  font-normal tracking-wide
  text-justify
  
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

export {
	Container,
	Content,
	HeadlineContent,
	HeadlineText,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	Subheader,
	SubheaderXL,
	Subtext,
	TerranContent,
	TerranPrimary,
	TerranPrimaryContent,
	Title,
	TitleXL,
	TitleClip,
}
