import { descriptionPlanet } from '@/constants';
import { Planet } from '@/interfaces/Planet';
import Image from 'next/image';
import React from 'react';

type Props = {
	params: {
		name: string;
	};
};

async function getData(name: string) {
	const response = descriptionPlanet.find((planet) => planet.name === name);
	return response;
}

export const generateStaticParams = async () => {
	const planet: Planet[] = await descriptionPlanet;
	return planet.map((planet: Planet) => ({
		path: planet.name,
	}));
};

const PlanetPage = async ({ params: { name } }: Props) => {
	const planet = await getData(name);
	return (
		<div className='grid grid-cols-2 gap-[257px] text-white '>
			<div className='object-contain'>
				<Image
					src={planet.href}
					alt={planet.name}
					width={445}
					height={445}
					className='object-contain'
				/>
			</div>
			<div className='w-[447px]'>
				<p className='text-[100px]'>{planet?.name}</p>
				<p>{planet?.description}</p>
				<div className='mt-[83px] flex gap-[51px]'>
					<div className='flex flex-col gap-3'>
						<p>AVG. DISTANCE</p>
						<p>{planet?.avgDistance}</p>
					</div>
					<div className='flex flex-col gap-3'>
						<p>EST. TRAVEL TIME</p>
						<p>{planet?.travelTime}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanetPage;
