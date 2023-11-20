import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

export const metadata: Metadata = {
	title: 'Outsourcee App',
	description: 'Simplify your workload.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${GeistMono.variable} ${GeistSans.variable}`}>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
