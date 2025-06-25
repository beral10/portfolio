import React from 'react';

interface MenuNavbarProps {
	isMenuOpened: boolean;
	setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuNavbar = ({isMenuOpened, setIsMenuOpened}: MenuNavbarProps) => {
	return (
		<div className='flex flex-col gap-1.5 cursor-pointer group z-40' onClick={() => setIsMenuOpened((prev) => !prev)}>
			<span className={`w-9 h-1 transform transition-all duration-600 ease-in-out ${isMenuOpened ? 'translate-y-1.5 rotate-45 bg-amber-500' : 'bg-gray-400'}`}></span>
			<span className={`w-9 h-1 transform transition-all duration-600 ease-in-out ${isMenuOpened ? 'opacity-0' : 'bg-gray-400'}`}></span>
			<span className={`w-9 h-1 transform transition-all duration-600 ease-in-out ${isMenuOpened ? '-translate-y-3.5 -rotate-45 bg-amber-500' : 'bg-gray-400'}`}></span>
		</div>
	);
};

export default MenuNavbar;
