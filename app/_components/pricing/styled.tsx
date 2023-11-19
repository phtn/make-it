import tw from 'tailwind-styled-components'
import { F, I, ItemProps } from './types'
import { Check, CheckCircle, CheckCircle2, X, XCircle } from 'lucide-react'
import { useCallback } from 'react'
import { map } from '@/app/_utils/helpers'
import { Button } from '@/components/ui/button'

const Container = tw.div`
  h-fit w-screen flex flex-col overflow-hidden
	mb-44
`

const GridContainer = tw.div`
  flex flex-col items-center px-6
  sm:grid sm:grid-cols-2 md:h-fit md:grid 
  md:grid-cols-2 lg:grid-cols-3 
  md:px-10 lg:px-24
`

// Pricing Item

const ItemContainer = tw.div<I>`
  ${(p) =>
		p.$id === 100 ? 'h-[650px]' : p.$id === 200 ? 'h-[650px]' : 'h-[700px] '}
  flex flex-col items-center w-full
`
const WrapCenter = tw.div`
  flex items-center justify-center
  py-3
`

const Content = tw.div<I>`
  ${(p) =>
		p.$id === 100 ? 'w-[330px]' : p.$id === 200 ? 'w-[330px]' : 'w-[400px]'}
      bg-background rounded-lg overflow-hidden shadow-lg
      hover:scale-105 transition-all duration-500 group
      dark:border
`

const ImageWrap = tw.div<I>`
  ${(p) =>
		p.$id === 100
			? `bg-[url('/pricing/free-v7.svg')] h-[130px]`
			: p.$id === 200
			? `bg-[url('/pricing/sapphire-v2.svg')] h-[130px]`
			: `bg-[url('/pricing/gold-v6.svg')] h-[180px]`}

  flex items-center justify-center
  bg-cover bg-bottom group-hover:bg-top 
  bg-no-repeat transition-all duration-500
`
const HeaderWrap = tw.div`
  flex px-6 py-2 items-center justify-between
`

const TitleWrap = tw.div`
  flex flex-col justify-center
`

const PriceWrap = tw.div`
  flex flex-col justify-center items-center
`

const Title = tw.span<I>`
  ${(p) =>
		p.$id === 100
			? `text-foreground dark:text-foreground`
			: p.$id === 200
			? `text-foreground dark:text-sky-500`
			: `text-foreground dark:text-yellow-500`}

  font-medium font-sans tracking-wide 
  text-[1.25rem]
`

const Price = tw.span`
  font-extrabold font-mono tracking-wide 
  text-[1.75rem] text-foreground 
`

const Wrap = tw.div``
const Description = tw.h3`
  uppercase font-light tracking-wide text-[11px]
  text-foreground
`
const FeatureCenter = tw.div`
  flex items-center border-t-[0.33px]
  py-[14px] px-6
`

const FeatureText = tw.div`
  text-sm text-foreground font-sans font-medium ml-3 
`

const Included = ({ title, included }: F) => {
	const MarkOptions = useCallback(() => {
		const options = map(
			<Check className='text-green-500' />,
			<X className='text-slate-400' />
		)
		return <>{options.get(included)}</>
	}, [included])
	return (
		<FeatureCenter>
			<MarkOptions />
			<FeatureText>{title}</FeatureText>
		</FeatureCenter>
	)
}

const SelectWrap = tw.div`
  h-24 flex items-center justify-center px-6
`

const Select = (props: ItemProps) => (
	<SelectWrap>
		<Button
			className='w-full'
			size={'lg'}>
			Select
		</Button>
	</SelectWrap>
)

const Header = ({
	id,
	title,
	description,
	price,
	duration,
}: Omit<ItemProps, 'features'>) => (
	<HeaderWrap>
		<TitleWrap>
			<Title $id={id}>{title}</Title>
			<Description>{description}</Description>
		</TitleWrap>
		<TitleWrap>
			<PriceWrap>
				<Price>
					<span className='mx-[3px] font-thin text-xl text-slate-500'>₱</span>
					{price}.<span className='font-thin text-xl text-slate-500'>00</span>
				</Price>
				<Description>{duration}</Description>
			</PriceWrap>
		</TitleWrap>
	</HeaderWrap>
)

const Featured = ({ features }: Pick<ItemProps, 'features'>) => (
	<Wrap>
		{features.map((item) => (
			<Included
				key={item.id}
				title={item.title}
				included={item.included}
			/>
		))}
	</Wrap>
)

const Item = (props: ItemProps) => {
	const { id, features, price, description, duration, title } = props
	const header = { id, price, description, duration, title }
	return (
		<ItemContainer $id={id}>
			<Content $id={id}>
				<ImageWrap $id={id}></ImageWrap>
				<Header {...header} />
				<Featured features={features} />
				<Select {...props} />
			</Content>
		</ItemContainer>
	)
}

export { Container, GridContainer, Item }
