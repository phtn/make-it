'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { HomeIcon } from 'lucide-react'
import {
	FAQsIcon,
	GridContent,
	NavigationInnerContent,
	NewletterIcon,
	TertiaryLink,
	TertiaryWrapper,
	TestimonialsIcon,
	TopSection,
	Trigger,
} from './styled'
import { TertiaryProps } from './types'
import { RegistrationForm } from '../../registration/form'
import { LottFile, Sydney, SydneyAsset } from '../../lottie'

const links: TertiaryProps[] = [
	{
		href: '/faqs',
		details: {
			title: 'FAQs',
			subtext: 'Your questions answered.',
		},
		icon: <FAQsIcon />,
	},

	{
		href: '/testimonials',
		details: {
			title: 'Testimonials',
			subtext: 'Read our testimonials.',
		},
		icon: <TestimonialsIcon />,
	},

	{
		href: '/newsletter',
		details: {
			title: 'Newsletter',
			subtext: 'Get free updates!',
		},
		icon: <NewletterIcon />,
	},
]

export function HomeMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className='mt-4 bg-transparent w-fit sm:w-56'>
						<Trigger>
							Make it in Australia <span className='font-thin ml-1'>PH</span>
						</Trigger>
					</NavigationMenuTrigger>

					<NavigationMenuContent
						className={`bg-[url('/bg/space-noise-v3.svg')] bg-cover dark:bg-slate-700`}>
						<NavigationInnerContent>
							<GridContent>
								<TopSection />
								<TertiaryList />
								<LottFile
									animationData={Sydney}
									loop={false}
									style={{}}
								/>
							</GridContent>
							<RegistrationModule />
						</NavigationInnerContent>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const RegistrationModule = () => (
	<div className='col-span-2 row-span-5'>
		<div className=' h-full sm:ml-2 w-screen sm:w-fit '>
			<RegistrationForm />
		</div>
	</div>
)

const TertiaryList = () => (
	<TertiaryWrapper>
		{links.map((item, index) => (
			<TertiaryLink
				key={index}
				href={item.href}
				icon={item.icon}
				details={item.details}
			/>
		))}
	</TertiaryWrapper>
)

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'select-none rounded-2xl px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}>
					<div className='flex flex-col justify-between items-start'>
						<div className='flex h-16 w-full py-3'>
							<HomeIcon className='h-4 w-4' />
						</div>
						<div>
							<h3 className='text-lg font-extrabold leading-none'>{title}</h3>
							<p className='text-xs text-muted-foreground'>{children}</p>
						</div>
					</div>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
