import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export type SocialLink = {
	name: string;
	src: string;
	icon: IconType;
	color?: string;
};

export type Project = {
	id: string | number;
	title: string;
	description: string;
	image: StaticImageData | string;
	techStack: string[];
	link: string;
	github?: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  date: string;
  description: string;
};

export type NavLink = {
	id: number;
	name: string;
	url: string;
};

export type CustomButtonProps = {
	onClick: () => void;
	showAll: boolean;
	showText?: string;  // texto cuando showAll es false
  hideText?: string; // texto cuando showAll es true
};