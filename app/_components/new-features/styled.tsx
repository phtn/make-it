import Image from 'next/image'
import tw from 'tailwind-styled-components'
import { FeatureItemProps } from './types'

const Container = tw.div`
  h-fit w-screen flex flex-col overflow-hidden
	mb-44
`

const GridContainer = tw.div`
  flex flex-col sm:grid sm:grid-cols-2 md:h-fit md:grid md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-24
`

// Feature Item

const FeatureItemContainer = tw.div`
  flex flex-col items-center w-full h-[550px]
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
  font-extrabold font-sans tracking text-[1.5rem] text-slate-800 dark:text-[54c8e8] leading-[1.5rem]
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

const Item = ({ title, description, src }: FeatureItemProps) => (
	<FeatureItemContainer>
		<FeatureDetail>
			<WrapCenter>
				<IconContainer>
					<Icon
						alt={title}
						src={src}
						height={100}
						width={100}
					/>
				</IconContainer>
			</WrapCenter>
			<WrapCenter>
				<FeatureTitle>{title}</FeatureTitle>
			</WrapCenter>
			<WrapCenter>
				<Description>
					<DescriptionText>{description}</DescriptionText>
				</Description>
			</WrapCenter>
		</FeatureDetail>
	</FeatureItemContainer>
)

export { Container, GridContainer, Item }