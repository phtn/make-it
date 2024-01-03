'use client'
import {ElementRef, forwardRef, ComponentPropsWithoutRef} from "react";
import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  VStack,
} from './styled'
import {HomeIcon} from "lucide-react";
import { BrandMenuContent, Trigger, TopSection, SubPanel, } from "./components";

export const Brand = () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Trigger />

					<BrandMenuContent>
						<VStack>
							<TopSection />
              <SubPanel/>
						</VStack>
					</BrandMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)

const ListItem = forwardRef<
	ElementRef<'a'>,
	ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'select-none rounded-2xl px-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
