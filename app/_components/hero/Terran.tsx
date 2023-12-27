import Link from 'next/link'
import {
	Container,
	TerranPrimary,
	TerranPrimaryContent,
	TerranContent,
	TitleXL,
	SubheaderXL,
	TitleClip,
} from './styled'
import { HeaderProps, HeroProps, PrimaryProps } from './types'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const Terran = ({ asset, primaryProps }: HeroProps) => (
	<Container>
		<TerranContent>
			<Primary {...primaryProps} />
			{asset}
		</TerranContent>
	</Container>
)

const Primary = ({
	title,
	subheader,
}: PrimaryProps) => {

	return (
		<TerranPrimary>
			<TerranPrimaryContent>
				<Header
					title={title}
					subheader={subheader}
				/>
				<div className='flex items-center'>
					<Button
						variant='tertiary'
						size='lg'
						className='w-[238px]'>
						<div className='flex items-center'>
							<span>Sign Up</span>
							<ArrowUpRight className='h-4 w-4 ml-3' />
						</div>
					</Button>
				</div>
			</TerranPrimaryContent>
		</TerranPrimary>
	)
}

const Header = ({ title, subheader }: HeaderProps) => (
	<div>
		<Link
			href={'/'}
			className='no-underline'>
			<TitleXL>
				<TitleClip>{title}</TitleClip>
			</TitleXL>
		</Link>
		<SubheaderXL>{subheader}</SubheaderXL>
	</div>
)

export default Terran
