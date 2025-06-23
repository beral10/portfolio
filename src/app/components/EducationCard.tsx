import React from 'react';
import { EducationItem } from '../types/types';
import { FaGraduationCap } from 'react-icons/fa6';

type EducationCardProps = {
	edu: EducationItem;
};

const EducationCard = ({ edu }: EducationCardProps) => {
	return (
		<div className='border border-cyan-700 rounded-xl p-6 bg-[#1a4b5e] shadow-lg hover:shadow-cyan-400/40 transition-shadow duration-300'>
			<div className='flex items-center gap-2 md:gap-4 mb-4'>
				<div className='w-[30px] h-[30px]'>
					<FaGraduationCap className='text-cyan-300 text-3xl' />
				</div>
				<div>
					<h3 className='text-xl font-semibold text-orange-300'>{edu.title}</h3>
					<p className='text-sm text-cyan-200'>{edu.institution}</p>
				</div>
			</div>
			<p className='text-sm text-gray-300 italic mb-2'>{edu.date}</p>
			<p className='text-gray-200'>{edu.description}</p>
		</div>
	);
};

export default EducationCard;
