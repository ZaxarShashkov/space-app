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
			<div className=''>
				<p className='text-main-text'>THE TERMINOLOGY…</p>
				<p className='text-[56px] my-3'>{technologies?.title}</p>
				<p className='text-[18px] text-main-text'>{technologies?.descr}</p>
			</div>
			<div className='flex justify-end mt-[-50px]'>
				<Image
					//@ts-ignore
					src={technologies?.href}
					//@ts-ignore
					alt={technologies?.title}
					height={415}
					width={427}
					className='object-center'
				/>
			</div>
		</>
	);
};

export default TechnologyPage;
