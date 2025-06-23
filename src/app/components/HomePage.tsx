import { Anton, Roboto } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import myPhoto from '../assets/photo/Remove-bg-brownTshirt.png';
import Image from 'next/image';
import ContactSection from './ContactSection';

const anton: NextFont = Anton({
  subsets: ['latin'],
  weight: '400',
});

const roboto: NextFont = Roboto({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
});

const HomePage = () => {
  return (
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
					<ContactSection />
				</div>
				<div className='hidden sm:block w-[250px] md:w-[350px] h-[250px] md:h-[350px] overflow-hidden border-2 border-[#0b5475] rounded-[50%_50%_40%_60%/60%_50%_50%_40%] transition-transform duration-300 hover:scale-105'>
					<Image src={myPhoto} alt='my-photo' width={500} height={500} className='object-contain w-full h-full' />
				</div>
			</div>
  )
}

export default HomePage