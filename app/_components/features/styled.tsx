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
  flex lg:h-[200px] h-[170px] w-full
`

const FeatureItemContent = tw.div`
  flex items-start justify-center 
  lg:w-[calc(100vw/3*0.3-1rem)] lg:h-[calc(100vw/3*0.3-1rem)]
	py-[1rem] md:py-0
`

const FeatureIconContainer = tw.div`
  flex items-center justify-center 
	h-12 w-12 md:h-20 md:w-20  
  bg-[#54c8e8] rounded-full
  shadow-xl shadow-[#54c8e8]/20
`

const FeatureDetail = tw.div`
  h-full flex flex-col flex-grow px-[1.25rem] py-[1rem]
`

const FeatureTitleContainer = tw.div`
  h-fit pb-4
`

const FeatureTitle = tw.h2`
  font-extrabold font-sans tracking text-[1.5rem] text-slate-800 dark:text-[54c8e8] leading-[1.5rem]
`

const FeatureDescriptionContainer = tw.div`
  h-fit lg:w-[calc(100vw/3*0.45)]
`
const FeatureDescriptionText = tw.h3`
  text-sm leading-4 text-muted-foreground tracking-wide
`

const Item = ({ id, title, description, src }: FeatureItemProps) => (
	<FeatureItemContainer>
		<FeatureItemContent>
			<FeatureIconContainer>
				<Image
					alt='verified icon'
					src={src}
					height={100}
					width={100}
					className='h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 text-primary-foreground'
				/>
			</FeatureIconContainer>
		</FeatureItemContent>
		<FeatureDetail>
			<FeatureTitleContainer>
				<FeatureTitle>{title}</FeatureTitle>
			</FeatureTitleContainer>
			<FeatureDescriptionContainer>
				<FeatureDescriptionText>{description}</FeatureDescriptionText>
			</FeatureDescriptionContainer>
		</FeatureDetail>
	</FeatureItemContainer>
)

export { Container, GridContainer, Item }
