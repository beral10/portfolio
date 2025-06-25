import { SkillCardProps } from "@/types/types";

const SkillCard = ({name, icon: Icon, color = 'text-white'}: SkillCardProps) => {
  return (
    <div className='bg-[#1e4d5f] hover:bg-[#23637b] duration-300 p-4 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transform transition-transform'>
      <Icon className={`text-4xl mb-2 ${color}`} />
      <p className='text-sm font-medium text-center'>{name}</p>
    </div>
  );
}

export default SkillCard