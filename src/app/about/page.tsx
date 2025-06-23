import React from 'react';

const AboutPage = () => {
	return (
		<section className='flex justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] bg-[#143c4e]'>
			<div className='relative py-16 px-6 overflow-hidden shadow-xl shadow-cyan-900'>
				<div className='absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500 opacity-30 blur-3xl rounded-full'></div>
				<div className='absolute -right-10 bottom-10 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full'></div>
				<div className='relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-10'>
					<h2 className='text-4xl sm:text-5xl font-bold text-cyan-400'>Este soy...</h2>

					<p className='text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl'>
						Un <span className='text-orange-400 font-semibold'>Desarrollador Frontend</span> con experiencia en tecnologías modernas como <strong className='text-cyan-300'>JavaScript, ReactJS y Next.js</strong>. Me apasiona crear{' '}
						<strong className='text-cyan-200'>interfaces intuitivas, accesibles y de alto rendimiento</strong>.
					</p>

					<p className='text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl'>
						Trabajo con herramientas como <strong className='text-pink-300'>HTML, CSS, Tailwind</strong> y <strong className='text-pink-300'>TypeScript</strong>, lo que me permite desarrollar soluciones escalables y modernas.
					</p>

					<p className='text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl'>
						Me destaco por mi <span className='text-green-300 font-medium'>proactividad</span>, <span className='text-green-300 font-medium'>comunicación efectiva</span>, <span className='text-green-300 font-medium'>trabajo en equipo</span> y{' '}
						<span className='text-green-300 font-medium'>pensamiento asertivo</span>.
					</p>

					<div className='h-[2px] w-1/2 bg-cyan-700 rounded-full mt-4 mx-auto'></div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;

/* 
			flex justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] bg-[#143c4e] text-white

			max-w-4xl w-full flex flex-col gap-10 items-center text-center
*/
