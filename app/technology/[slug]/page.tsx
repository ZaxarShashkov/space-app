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
	console.log(technologies);
	return (
		<>
			<div className=''>
				<p>THE TERMINOLOGY…</p>
				<p>{technologies?.title}</p>
				<p>{technologies?.descr}</p>
			</div>
			<div className='flex justify-end'>
				<Image
					//@ts-ignore
					src={technologies?.href}
					//@ts-ignore
					alt={technologies?.title}
					height={550}
					width={400}
					className='object-center'
				/>
			</div>
		</>
	);
};

export default TechnologyPage;
