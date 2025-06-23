import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SocialLink } from '../types/types';

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


const ContactSection = () => {
  return (
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
  )
}

export default ContactSection