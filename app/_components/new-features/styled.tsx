import Image from 'next/image'
import tw from 'tailwind-styled-components'
import { Item, LinkProps } from './types'
import Link from 'next/link'

const Container = tw.div`
  h-fit w-screen flex flex-col overflow-hidden
	sm:py-44 py-24
  bg-gradient-to-bl
  from-[#FEF7E4]
  to-[#AEB4EA]

`

const GridContainer = tw.div`
  flex flex-col sm:grid sm:grid-cols-2 md:h-fit md:grid md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-24
`

// Feature Item

const FeatureItemContainer = tw.div`
  flex flex-col items-center w-full sm:h-[550px] h-fit
`
const WrapCenter = tw.div`
  flex items-center justify-center
  py-6
`

const IconContainer = tw.div`
  flex items-center justify-center 
  bg-[#54c8e8] rounded-full
  shadow-xl shadow-[#54c8e8]/20
  h-fit w-fit p-6
`

const FeatureDetail = tw.div`
  px-[1.25rem] py-[1rem]
`

const FeatureTitle = tw.h2`
  font-extrabold font-sans tracking text-[1.5rem] text-foreground dark:text-[54c8e8] leading-[1.5rem]
`

const Description = tw.div`
  px-6
`
const DescriptionText = tw.h3`
  text-[1rem] text-muted-foreground tracking-wide
  text-center font-normal
`

const Icon = tw(Image)`
  h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 
`

const ListItem = (props: Item) => (
	<FeatureItemContainer>
		<FeatureDetail>
			<WrapCenter>
				<IconContainer>
					<Icon
						alt={props.title}
						src={props.src}
						height={100}
						width={100}
					/>
				</IconContainer>
			</WrapCenter>
			<WrapCenter>
				<FeatureTitle>{props.title}</FeatureTitle>
			</WrapCenter>
			<WrapCenter>
				<Description>
					<DescriptionText>{props.description}</DescriptionText>
				</Description>
			</WrapCenter>
		</FeatureDetail>
	</FeatureItemContainer>
)

const List = ({ href, id, props }: LinkProps) => (
	<Link
		href={href}
		key={id}>
		<ListItem {...props} />
	</Link>
)

export { Container, GridContainer, ListItem, List }
