import { crew } from '@/constants';
import { Crew } from '@/interfaces/Crew';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

type CrewPageProps = {
	params: {
		slug: string;
	};
};

async function getData(slug: string) {
	const response = await crew.find((human) => human.slug.toLowerCase() === slug?.toLowerCase());
	return response;
}

export const generateStaticParams = async () => {
	const people: Crew[] = await crew;
	return people.map((human: Crew) => ({
		slug: human.slug,
	}));
};

const CrewPage = async ({ params: { slug } }: CrewPageProps) => {
	const team = await getData(slug);

	return (
		<div className='lg:grid lg:grid-cols-2 text-white mx-[100px] mt-[50px] xs:flex xs:flex-col  '>
			<div className='flex flex-col xs:items-center lg:items-start'>
				<p className='text-white text-[28px]'>
					<span className='opacity-25 pr-[24px] font-bold'>02 </span>MEET YOUR CREW
				</p>
				<p className='mt-[100px] opacity-50 lg:text-[32px] xs:text-[20px]  uppercase'>
					{team?.post}
				</p>
				<p className='mt-4 lg:text-[56px] xs:text-[40px] uppercase'>{team?.name}</p>
				<p className='mt-[27px] text-main-text'>{team?.descr}</p>
				<ul className='flex gap-5 mt-10'>
					{crew?.map((link) => (
						<li key={link.name}>
							<Link
								href={`/crew/${link.slug}`}
								className={` block w-[15px] h-[15px] rounded-[50%] bg-white  ${
									slug.toLowerCase() === link.slug.toLowerCase()
										? 'opacity-20'
										: 'opacity-100'
								}`}></Link>
						</li>
					))}
				</ul>
			</div>
			<div className='object-contain flex justify-center lg:mt-[65px] xs:mt-8'>
				<Image
					// @ts-ignore
					src={team?.href}
					// @ts-ignore
					alt={team?.name}
					width={350}
					height={300}
					sizes=''
					className='object-contain'
				/>
			</div>
		</div>
	);
};

export default CrewPage;
