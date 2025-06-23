'use client';
import { Anton, Roboto } from 'next/font/google';
import Image from 'next/image';
import myPhoto from './assets/photo/Remove-bg-brownTshirt.png';
import { NextFont } from 'next/dist/compiled/@next/font';
import { SocialLink } from './types/types';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';

const anton: NextFont = Anton({
	subsets: ['latin'],
	weight: '400',
});

const roboto: NextFont = Roboto({
	subsets: ['latin'],
	weight: ['200', '300', '400'],
});

const socialLinks: SocialLink[] = [
	{
		name: 'GitHub',
		src: 'https://github.com/beral10',
		icon: FaGithub,
		color: 'text-white',
	},
	{
		name: 'LinkedIn',
		src: 'https://www.linkedin.com/in/yeferson-bernal-gutierrez-515a88355/',
		icon: FaLinkedin,
		color: 'text-sky-400',
	},
];

export default function Home() {
	return (
		<section className='flex justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] bg-[#143c4e]'>
			<div className={`${roboto.className} sm:w-full max-w-[1000px] h-[80%] space-y-[50px] sm:space-y-0 sm:flex sm:justify-around sm:items-center`}>
				<div className='sm:w-1/2 h-full flex flex-col justify-around sm:items-center'>
					<div className={`flex flex-col items-center gap-4 sm:gap-10`}>
						<h1 className={`${anton.className} text-3xl sm:text-5xl font-bold text-[#FFA630] leading-tight`}>
							¡Hola! 👋 <br /> Soy <span className='text-4xl text-[#00DFFC]'>Yeferson Bernal</span>
						</h1>
						<div className='w-16 h-1 bg-[#db5282] rounded-full'></div>
						<p className='text-[#db5282] text-lg sm:text-xl tracking-wide font-medium'>
							<strong>Desarrollador Web Frontend</strong>
						</p>
						<div className='sm:hidden w-[200px] h-[200px] overflow-hidden border-2 border-[#0b5475] rounded-[50%_50%_40%_60%/60%_50%_50%_40%]'>
							<Image src={myPhoto} alt='my-photo' width={500} height={500} className='object-contain w-full h-full transition-transform duration-700 ease-in-out hover:scale-105' />
						</div>
						<p className='text-[#CCCCCC] text-center max-w-md leading-relaxed'>
							Me especializo en <span className='text-[#00DFFC] font-medium'>React</span>, <span className='text-[#00DFFC] font-medium'>Next.js</span> y tecnologías web actuales.
						</p>
					</div>
					<div className='w-full flex flex-col items-center justify-center gap-2 sm:gap-10'>
						<div className='flex justify-center items-center gap-8'>
							{socialLinks.map((link) => (
								<a key={link.name} href={link.src} aria-label={link.name} target='_blank'>
									<link.icon className={`text-4xl mb-2 ${link.color}`} />
								</a>
							))}
						</div>
						<a href='mailto:yeferson.bernal@outlook.com' target='_blank' className='flex justify-center items-center gap-2 text-white'>
							<PiMicrosoftOutlookLogo className='text-4xl mb-2 text-sky-600' />
							yeferson.bernal@outlook.com
						</a>
						<a className='inline-block transition-all duration-300 ease-in-out w-full max-w-[400px] text-center bg-[#00dffc] text-[#ffffff] text-xl font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:bg-white hover:text-[#00dffc]' href='/cv/cv-yeferson-bernal.pdf' download>
							Descargar CV
						</a>
					</div>
				</div>
				<div className='hidden sm:block w-[250px] md:w-[350px] h-[250px] md:h-[350px] overflow-hidden border-2 border-[#0b5475] rounded-[50%_50%_40%_60%/60%_50%_50%_40%] transition-transform duration-300 hover:scale-105'>
					<Image src={myPhoto} alt='my-photo' width={500} height={500} className='object-contain w-full h-full' />
				</div>
			</div>
		</section>
	);
}
