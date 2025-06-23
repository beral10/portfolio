'use client'
import { myProjects } from './data';
import ProjectCard from '../components/ProjectCard';
import PortfolioGitHub from '../components/PortfolioGitHub';

const Projects = () => {
	

	return (
		<section className='flex justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] py-[50px] bg-[#143c4e]'>
			<div className='w-full max-w-6xl mx-auto text-center'>
				<h2 className='text-4xl sm:text-5xl font-bold text-cyan-400 mb-12'>Proyectos</h2>
				
				<PortfolioGitHub />

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{myProjects.map((project) => (
						<div key={project.id} className='space-y-5 text-white max-w-[450px]'>
							<h3 className='text-xl font-semibold text-shadow-cyan-600 text-shadow-lg lg:hidden'>{project.title}</h3>
							<ProjectCard project={project} />
							<p className='mb-3 lg:hidden'>{project.description}</p>
							<div className='sm:hidden w-full h-1 bg-[#7e6e59] rounded-full'></div>
						</div>						
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
