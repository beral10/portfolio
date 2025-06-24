import AboutMeComponent from './components/AboutMeComponent';
import HomeComponent from './components/HomeComponent';

export default function Home() {
	return (
		<section className='flex flex-col justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] bg-[#143c4e] pb-12 overflow-hidden'>
			<HomeComponent />
			<AboutMeComponent />
			<div className='fixed bottom-0 max-w-[1500px] w-full h-[100px] bg-gradient-to-b from-transparent to-[#92386d79] pointer-events-none z-20 overflow-hidden'></div>
		</section>
	);
}
