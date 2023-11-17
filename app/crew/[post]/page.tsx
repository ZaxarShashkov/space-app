import { crew } from '@/constants';
import { Crew } from '@/interfaces/Crew';
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
	const crew = await getData(post);

	return (
		<div className='text-white'>
			{crew?.post}
			dsaaaaaaaaaaaaaaaaaaaaaa
		</div>
	);
};

export default CrewPage;
