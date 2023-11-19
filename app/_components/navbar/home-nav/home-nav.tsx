'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
	Castle,
	FileQuestion,
	HelpCircle,
	HomeIcon,
	LibraryBig,
	MailCheck,
	Newspaper,
	Pyramid,
	Star,
} from 'lucide-react'
import {
	FAQsIcon,
	NewletterIcon,
	PrimarySet,
	SecondarySet,
	TertiaryIconContainer,
	TertiaryLink,
	TertiaryOuter,
	TestimonialsIcon,
} from './styled'
import { TertiaryDetail, TertiaryProps } from './types'
import Registration from '../../registration/registration'
import { RegistrationForm } from '../../registration/form'

const links: TertiaryProps[] = [
	{
		href: '/',
		details: {
			title: 'FAQs',
			subtext: 'Your questions answered.',
		},
		icon: <FAQsIcon />,
	},

	{
		href: '/',
		details: {
			title: 'Testimonials',
			subtext: 'Read our testimonials.',
		},
		icon: <TestimonialsIcon />,
	},

	{
		href: '/',
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
					<NavigationMenuTrigger className='bg-slate-700'>
						<span className='font-extrabold text-[#54c8e8] text-lg'>MiiA</span>
					</NavigationMenuTrigger>

					<NavigationMenuContent className='bg-slate-200 dark:bg-slate-700'>
						<div className='grid grid-cols-5 w-[600px]'>
							<div className='grid grid-rows-2 col-span-3 border-r-[0.33px] border-slate-700'>
								<div className='h-[180px] flex items-center justify-evenly'>
									<PrimarySet />
									<SecondarySet />
								</div>

								<div className='h-[180px] pb-[12px] grid grid-rows-3 '>
									{links.map((item, index) => (
										<TertiaryLink
											key={index}
											href={item.href}
											icon={item.icon}
											details={item.details}
										/>
									))}
								</div>
							</div>

							<div className='col-span-2 row-span-5'>
								<div className=' h-full '>
									<RegistrationForm />
								</div>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

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
