//'use client'
//import { useState } from 'react';
import EducationCard from '../components/EducationCard';
import { educationData } from './education';
//import CustomButton from '../utils/CustomButton';

const Education = () => {
  //const [showAll, setShowAll] = useState<boolean>(false);
  //const visibleStudies = showAll ? educationData : educationData.slice(0, 4);
	return (
		<section className='flex justify-center items-center mx-auto max-w-[1500px] h-full shadow-black shadow-2xl px-[20px] py-[50px] bg-[#143c4e]'>
			<div className='max-w-5xl w-full space-y-10 flex flex-col justify-center items-center'>
				<h2 className='text-4xl sm:text-5xl font-bold text-cyan-400 text-center'>Educación</h2>
				<div className='grid gap-8 sm:grid-cols-2'>
					{/* {visibleStudies.map((edu, index) => (
						<EducationCard key={index} edu={edu} />
					))} */}
					{
						educationData.map((edu, index) => (
						<EducationCard key={index} edu={edu} />
					))
					}
				</div>
				{/* {educationData.length > 3 && <CustomButton onClick={() => setShowAll((prev) => !prev)} showAll={showAll} showText={"Ver más estudios"} />} */}
			</div>
		</section>
	);
};

export default Education;