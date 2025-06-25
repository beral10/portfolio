'use client';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logotipo/logo_desktop.png';
import logoMbile from '../assets/logotipo/logo_mobile.png';
import { useState } from 'react';
import { NavLink } from '@/types/types';
import MenuNavbar from './ui/menuNavbar';

const links: NavLink[] = [
	{
		id: 1,
		name: 'Habilidades',
		url: '/skills',
	},
	{
		id: 2,
		name: 'Proyectos',
		url: '/projects',
	},
	{
		id: 3,
		name: 'Educación',
		url: '/education',
	},
];

const parentMobileVariants: Variants = {
	opened: {
		height: '100vh',
		transition: {
			when: 'beforeChildren',
			duration: 0.6,
		},
	},
	closed: {
		height: 70,
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.2,
			staggerDirection: -1,
			duration: 0.8,
		},
	},
};

const ulMobileVariants: Variants = {
	opened: {
		opacity: 1,
		visibility: 'visible',
		pointerEvents: 'auto',
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	closed: {
		opacity: 0,
		visibility: 'hidden',
		pointerEvents: 'none',
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};

const liMobileVarians: Variants = {
	opened: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.2, ease: 'easeOut' },
	},
	closed: {
		opacity: 0,
		y: 40,
		transition: { duration: 0.1, ease: 'easeOut' },
	},
};

const NavBar = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

	return (
		<div className={`bg-[#0b2a38] mb-16 sm:mb-0`}>
			{/* Nav en mobile */}
			<motion.nav className='sm:hidden fixed top-0 left-0 w-full bg-[#0b2a38] z-50 max-sm:px-10 flex flex-col gap-56' variants={parentMobileVariants} initial='closed' animate={isMenuOpened ? 'opened' : 'closed'}>
				{/* Componente logo-menú */}
				<div className='flex justify-between items-center z-40'>
					{/* Logo */}
					<div>
						<Link
							href='/'
							onClick={() => {
								setIsMenuOpened(false);
								setActiveLinkId(null);
							}}>
							<Image src={logoMbile} alt='logo' width={50} height={50} priority />
						</Link>
					</div>

					{/* Menú */}
					<MenuNavbar isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
				</div>
				<motion.ul className={`flex flex-col items-center justify-center space-y-[30px]`} variants={ulMobileVariants} initial='closed' animate={isMenuOpened ? 'opened' : 'closed'}>
					{links.map((link) => (
						<motion.li key={link.id} className='list-none text-white' variants={liMobileVarians}>
							<Link href={link.url} onClick={() => setIsMenuOpened(false)}>
								{link.name}
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>

			{/* Nav en desktop */}
			<nav className='hidden sm:flex max-w-[1500px] mx-auto px-[40px]'>
				<Link href='/' onClick={() => setActiveLinkId(null)}>
					<Image src={logo} alt='logo' width={200} height={80} priority />
				</Link>
				<ul className='flex flex-1 items-center justify-end gap-8'>
					{links.map((link) => (
						<li key={link.id} className='list-none text-white hover:text-blue-400 hover:scale-[1.1] m-0 group' onClick={() => setActiveLinkId(link.id)}>
							<Link href={link.url}>{link.name}</Link>
							<hr className={`mt-1 opacity-0 w-0 h-1 border-none rounded-full transition-all duration-500 ease-in-out ${activeLinkId === link.id ? 'opacity-100 w-[80%] bg-orange-500' : 'bg-gray-500 group-hover:opacity-100 group-hover:w-full'}`} />
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;