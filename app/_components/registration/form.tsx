'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import {useEffect, useState } from 'react'
import { FormProps } from './types'
import { ArrowUpRight } from 'lucide-react'
import { Header } from './styled'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.string().min(2, {
		message: 'Invalid Email.',
	}),
	phone: z.string().min(10, {
		message: 'Invalid Phone Number',
	}),
})

const checkEmail = (email: string) => {
	const emailRegistered = localStorage.getItem('registration')
	return emailRegistered === email
}

export function RegistrationForm() {
	const [loading, setLoading] = useState(false)
	const [registeredEmail, setRegisteredEmail] = useState(false)

	useEffect(() => {
		const registered = localStorage.getItem('registration')
		if (registered !== null) {
			setRegisteredEmail(true)
			setLoading(false)
		}

	}, [registeredEmail, loading])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values)
	}

	return (
		<div className='flex justify-center mb-10'>
			<div className='pt-[20px] sm:px-2 px-8 rounded w-full sm:w-fit'>
				<Header />
				<FormComponent
					form={form}
					onSubmit={onSubmit}
				/>
			</div>
		</div>
	)
}
const RegisteredEmail = ({ email }: { email: string }) => (
	<div className='h-32'>
		<span>{email} already registered.</span>
	</div>
)

const FormComponent = ({ form, onSubmit }: FormProps) => (
	<Form {...form}>
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='sm:space-y-5 space-y-8'>
			<FormField
				control={form.control}
				name='name'
				render={({ field }) => (
					<FormItem>
						{/* <Label>
							<User className='h-[10px] w-[10px] mr-2' />
							<span>Complete Name</span>
						</Label> */}
						<FormControl>
							<Input
								placeholder='Your name here.'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='email'
				render={({ field }) => (
					<FormItem>
						{/* <Label>
							<AtSign className='h-[10px] w-[10px] mr-2' />
							<span>Email Address</span>
						</Label> */}
						<FormControl>
							<Input
								type='email'
								placeholder='Email'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='phone'
				render={({ field }) => (
					<FormItem>
						{/* <Label>
							<Phone className='h-[10px] w-[10px] mr-2' />
							<span>Phone Number</span>
						</Label> */}
						<FormControl>
							<Input
								placeholder='Phone'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button
				size={'lg'}
				type='submit'
				variant='tertiary'
				disabled={true}
				className='w-full mt-3'>
				<div className='flex items-center'>
					<span>Sign up</span>
					<ArrowUpRight className='h-4 w-4 ml-3' />
				</div>
			</Button>
			<Button
				disabled={true}
				size={'lg'}
				type='submit'
				variant={'outline'}
				className='flex w-full mt-3'>
				<span>Sign in with Google</span>
			</Button>
		</form>
	</Form>
)


