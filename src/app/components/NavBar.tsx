'use client';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logotipo/logo_desktop.png';
import { useState } from 'react';
import { NavLink } from '../types/types';

const links: NavLink[] = [
	{
		id: 1,
		name: 'Sobre mí',
		url: '/about',
	},
	{
		id: 2,
		name: 'Proyectos',
		url: '/projects',
	},
	{
		id: 3,
		name: 'Habilidades',
		url: '/skills',
	},
	{
		id: 4,
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
			duration: 1.5,
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
		<div className={`bg-[#0b2a38] w-full mb-16 sm:mb-0`}>
			{/* Nav en mobile */}
			<motion.nav className='sm:hidden fixed top-0 left-0 w-full bg-[#0b2a38] z-50 overflow-hidden px-[20px] flex flex-col gap-64' variants={parentMobileVariants} initial='closed' animate={isMenuOpened ? 'opened' : 'closed'}>
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
							<Image src={logo} alt='logo' width={200} height={80} priority />
						</Link>
					</div>

					{/* Menú */}
					<div className='flex flex-col gap-1.5 cursor-pointer group z-40' onClick={() => setIsMenuOpened((prev) => !prev)}>
						<span className={`w-9 h-1 transform transition-all duration-600 ease-in-out ${isMenuOpened ? 'translate-y-1.5 rotate-45 bg-amber-500' : 'bg-gray-400'}`}></span>
						<span className={`w-9 h-1 transform transition-all duration-600 ease-in-out ${isMenuOpened ? 'opacity-0' : 'bg-gray-400'}`}></span>
						<span className={`w-9 h-1 transform transition-all duration-600 ease-in-out ${isMenuOpened ? '-translate-y-3.5 -rotate-45 bg-amber-500' : 'bg-gray-400'}`}></span>
					</div>
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
			<nav className='hidden sm:flex max-w-[1500px] mx-auto px-[20px]'>
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