import { CustomButtonProps } from "../../types/types";

const CustomButton = ({onClick, showAll, showText = "Ver más", hideText = "Ver menos"}: CustomButtonProps) => {
  return (
		<button
			onClick={onClick}
			className='mt-12 bg-[#00dffc] text-[#ffffff] hover:bg-white hover:text-[#00dffc] font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer'
		>
			{showAll ? hideText : showText}
		</button>
	);
}

export default CustomButton 