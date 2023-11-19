import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { RegistrationForm } from './form'
import { Header, HeaderGap } from '../header'

const Registration = () => (
	<Sheet>
		<SheetTrigger>
			<span className='text-xs font-bold bg-foreground dark:bg-primary-foreground dark:text-foreground text-white py-1 px-3 rounded '>
				Register
			</span>
		</SheetTrigger>
		<SheetContent
			className='w-full'
			side={'bottom'}>
			<SheetHeader>
				<SheetTitle>
					<Header
						tag='Join us'
						title='Outsourcee Registration'
					/>
					<HeaderGap />
				</SheetTitle>
			</SheetHeader>
			<div className='md:grid md:grid-cols-2'>
				<RegistrationForm />
			</div>
		</SheetContent>
	</Sheet>
)

export default Registration
