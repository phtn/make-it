import Image from 'next/image'
import tw from 'tailwind-styled-components'

const GridContainer = tw.div`
  sm:h-[600px] md:grid md:grid-cols-4
`

const PrimaryContent = tw.div`
  flex flex-col justify-center items-start col-span-2 
  pl-4 sm:pl-10 lg:pl-20 bg-gradient-to-b 
  from-primary-foreground/10 to-10% to-transparent
  border-t-[0.33px] border-r-[0.33px]
`

const PastPrimaryContent = tw.div`
  flex flex-col justify-center items-start col-span-2 pl-4 sm:pl-10 lg:pl-20 bg-gradient-to-t from-[#54c8e8]/10 to-10% to-transparent
  border-t-[0.33px] 
`

const Headline = tw.h1`
  bg-slate-800 sm:px-3 px-4 py-2
  font-sans font-extrabold sm:text-[2.5rem] text-[1.5rem] text-primary-foreground my-3 sm:w-[500px]
`

const PastHeadline = tw.h1`
  bg-slate-800 sm:px-3 px-4 py-2 
  font-sans sm:font-extrabold font-bold sm:text-[2.5rem] text-[1.5rem] text-[#54c8e8] my-3 sm:w-[500px]
`

const SubtextContainer = tw.div`
  flex items-center mt-6 
  border-l-8 border-secondary-foreground 
  py-2 sm:px-4 px-6 sm:w-[500px] w-fit 
`
const SubtextContent = tw.h2`
  text-[0.75rem] sm:text-sm 
  text-muted-foreground
  font-normal tracking-wide 
  text-justify
`

const Subtext = ({ description }: { description: string }) => (
	<SubtextContainer>
		<SubtextContent>{description}</SubtextContent>
	</SubtextContainer>
)

const Col = tw.div`
  col-span-2 lg:pr-20 
  bg-gradient-to-t from-primary-foreground/10 to-10% to-transparent border-t-[0.33px]
`

const PastColumn = tw.div`
  col-span-2 lg:pr-20 
  bg-gradient-to-b from-[#54c8e8]/10 to-10% to-transparent border-t-[0.33px] border-r-[0.33px]
`
const Row = tw.div`
  h-full hidden sm:flex items-center justify-around mx-10
`

const Photo = tw(Image)`
  h-96 w-auto hover:scale-110 transition-transform duration-500 rounded-full
`
const LinksContainer = tw.div`
  w-full flex mb-16
`

export {
	Col,
	GridContainer,
	Headline,
	LinksContainer,
	PrimaryContent,
	Row,
	Subtext,
	Photo,
	PastPrimaryContent,
	PastColumn,
	PastHeadline,
}
