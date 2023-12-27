import {ReactNode} from 'react'
//import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navbar from './_components/navbar'


const inter = Inter({ subsets: ['latin'] })

//export const metadata: Metadata = {
//	title: 'Make It In Australia PH',
//	description: 'Club, Hope Builder, Social Enterprise.',
//}

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${inter.className}`}>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					{children}

					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	)
}
