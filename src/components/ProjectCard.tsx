'use client'

import { Project } from '@/types/types';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div className='group relative overflow-hidden rounded-2xl border-2 border-cyan-800 shadow-lg' onClick={() => window.open(project.link, '_blank')}>
			<Image src={project.image} alt={project.title} width={600} height={400} className='w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105' />

			{/* Enlace global */}
			{/* <a href={project.link} target='_blank' rel='noopener noreferrer' className='absolute inset-0 z-10 sm:hidden' aria-label={`Ver ${project.title}`}></a> */}

			{/* Vista mobile-tablets */}
			<div className='lg:hidden absolute left-0 top-[65%] bottom-0 right-0 bg-[#855a1ab6] px-4 flex flex-col justify-center'>
				<ul className='flex flex-wrap justify-center items-center gap-1'>
					{project.techStack.map((tech, index) => (
						<li key={index} className='bg-[#ffffffc4] border border-gray-400 px-2 py-0.5 rounded-full text-[#02a9be] text-sm'>
							{tech}
						</li>
					))}
					{project.github && (
						<a href={project.github} target='_blank' rel='noopener noreferrer' className='text-sm text-white underline font-semibold hover:text-cyan-300 text-center' onClick={(e) => e.stopPropagation()}>
							Ver código en GitHub
						</a>
					)}
				</ul>
			</div>

			{/* Vista en desktop */}
			<div className='hidden absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-700 to-gray-900 p-4 lg:flex flex-col justify-center opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-600 overflow-hidden'>
				<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
				<p className='text-sm mb-3'>{project.description}</p>
				<ul className='flex flex-wrap justify-center gap-2 text-xs'>
					{project.techStack.map((tech, index) => (
						<li key={index} className='bg-cyan-600/30 border border-cyan-300 px-2 py-1 rounded-full transition-transform duration-400 hover:scale-110 m-auto'>
							{tech}
						</li>
					))}
					{project.github && (
						<a href={project.github} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-white bg-[#0d1117] hover:bg-[#171b22] px-4 py-2 rounded-lg text-sm hover:scale-110 transition-transform duration-400' onClick={(e) => e.stopPropagation()}>
							<FaGithub className='text-xl' />
							Código en GitHub
						</a>
					)}
				</ul>
			</div>
		</div>
	);
};

export default ProjectCard;
