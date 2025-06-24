'use client';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiFigma } from 'react-icons/si';
import { BsChatDots, BsPeople, BsLightbulb } from 'react-icons/bs';
import SkillCard from '../components/SkillCard';
import { ImPacman } from 'react-icons/im';

const skills = {
	frontend: [
		{ name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
		{ name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
		{ name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
		{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
		{ name: 'React', icon: FaReact, color: 'text-cyan-400' },
		{ name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-300' },
		{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
	],
	herramientas: [
		{ name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
		{ name: 'GitHub', icon: FaGithub, color: 'text-white' },
		{ name: 'VS Code', icon: BiLogoVisualStudio, color: 'text-blue-400' },
		{ name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
	],
	softSkills: [
		{ name: 'Comunicación', icon: BsChatDots, color: 'text-green-400' },
		{ name: 'Trabajo en equipo', icon: BsPeople, color: 'text-blue-300' },
		{ name: 'Pensamiento creativo', icon: BsLightbulb, color: 'text-yellow-300' },
	],
};

const Skills = () => {
	return (
		<section className='flex justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] bg-[#143c4e]'>
			<div className='relative max-w-[1100px] w-full px-[20px] lg:px-[40px] text-white pt-10 md:pt-20'>
				<div className='absolute top-4 -left-10 bg-green-700 w-56 h-56 opacity-30 blur-3xl rounded-full'></div>
				<ImPacman className='absolute bottom-10 right-3 text-orange-400 w-30 h-30 rotate-y-180  blur-sm' />

				<h2 className='text-4xl sm:text-5xl font-bold text-center text-cyan-400 mb-12'>Habilidades</h2>

				{/* Convertir el {}skills en [] y luego iterar en cada uno con .map() */}
				{Object.entries(skills).map(([category, items]) => (
					<div key={category} className='mb-12'>
						<h3 className='text-2xl sm:text-3xl font-semibold mb-6 capitalize text-orange-300 text-center sm:text-left'>{category}</h3>
						<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
							{items.map((skill) => (
								<SkillCard key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
