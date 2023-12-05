import { technology } from '@/constants';
import { Technology } from '@/interfaces/Technology';
import Image from 'next/image';
import React from 'react';

type TechnologyPageProps = {
	params: {
		slug: string;
	};
};

async function getData(slug: string) {
	const response = await technology.find(
		(tech) => tech.slug.toLowerCase() === slug?.toLowerCase()
	);
	return response;
}

export const generateStaticParams = async () => {
	const tech: Technology[] = await technology;
	return tech.map((human: Technology) => ({
		slug: human.slug,
	}));
};

const TechnologyPage = async ({ params: { slug } }: TechnologyPageProps) => {
	const technologies = await getData(slug);
	return (
		<>
			<div className='flex flex-col justify-center items-center xs:mt-10 xs:p-10 lg:mt-0 lg:p-0 lg:block'>
				<p className='text-main-text'>THE TERMINOLOGY…</p>
				<p className='text-[56px] my-7'>{technologies?.title}</p>
				<p className='text-[18px] text-main-text'>{technologies?.descr}</p>
			</div>
			<div className='xs:flex lg:justify-end xs:justify-center xs:items-center lg:mt-[-100px] xs:pb-5 lg:pb-0 '>
				<Image
					//@ts-ignore
					src={technologies?.href}
					//@ts-ignore
					alt={technologies?.title}
					height={415}
					width={427}
					className='object-contain'
				/>
			</div>
		</>
	);
};

export default TechnologyPage;
