import { crew } from '@/constants';
import { Crew } from '@/interfaces/Crew';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CrewPageProps = {
	params: {
		post: string;
	};
};

async function getData(post: string) {
	const response = await crew.find((human) => human.post.toLowerCase() === post?.toLowerCase());
	return response;
}

export const generateStaticParams = async () => {
	const people: Crew[] = await crew;
	return people.map((human: Crew) => ({
		slug: human.post,
	}));
};

const CrewPage = async ({ params: { post } }: CrewPageProps) => {
	const team = await getData(post);

	return (
		<div className='grid grid-cols-2 text-white justfy-center mx-[100px] mt-[50px] '>
			<div className=''>
				<p className='text-white text-[28px]'>
					<span className='opacity-25 pr-[24px] font-bold'>02 </span>MEET YOUR CREW
				</p>
				<p className='mt-[100px] opacity-50 text-[32px] uppercase'>{team?.post}</p>
				<p className='mt-4 text-[56px] uppercase'>{team?.name}</p>
				<p className='mt-[27px] text-main-text'>{team?.descr}</p>

				{crew?.map((link) => (
					<ul>
						<li>
							<Link href={`/crew/${link.post}`}>{link.post}</Link>
						</li>
					</ul>
				))}
			</div>
			<div className='object-contain flex justify-center lg:mt-[65px]'>
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
