import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portafolio de desarrollador front-end con proyectos en React, Next.js y diseño responsive.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='h-full'>
			<body className={`h-full min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}>
				<header>
					<NavBar />
				</header>
				<main className='flex-grow bg-[#0f4761]'>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}


