import { ItemProps, F } from './types'

const freeItems: F[] = [
	{ id: 1001, title: 'MiiA Platform Limited Access', included: true },
	{ id: 1002, title: 'Limited Group Class Access', included: true },
	{ id: 1003, title: 'Can Hire Mentors', included: true },
	{ id: 1004, title: 'Free Consultation', included: true },
	{ id: 1005, title: 'No Special Benefits', included: false },
]

const sapphireItems: F[] = [
	{ id: 2001, title: 'MiiA Platform Limited Access', included: true },
	{ id: 2002, title: 'Additional Group Class Access', included: true },
	{ id: 2003, title: 'Can Hire Mentors', included: true },
	{ id: 2004, title: 'Free Consultation', included: true },
	{ id: 2005, title: 'No Special Benefits', included: false },
]

const goldItems: F[] = [
	{ id: 3001, title: 'MiiA Platform Limited Access', included: true },
	{ id: 3002, title: 'Unlimited Group Class Access', included: true },
	{ id: 3003, title: 'Discounted Mentor Rates', included: true },
	{ id: 3004, title: 'May Apply For Loan Support **', included: true },
	{ id: 3005, title: 'With Shortcuts to Success', included: true },
]

const membership: ItemProps[] = [
	{
		id: 100,
		title: 'Free *',
		description: `basic`,
		features: freeItems,
		price: 0.0,
		duration: '1st Month',
	},

	{
		id: 300,
		title: 'Gold',
		description: `elite`,
		features: goldItems,
		price: 999,
		duration: 'Monthly',
	},
	{
		id: 200,
		title: 'Sapphire',
		description: `pro`,
		features: sapphireItems,
		price: 499,
		duration: 'Monthly',
	},
]

export { membership }
