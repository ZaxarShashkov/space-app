import { descriptionPlanet } from '@/constants';
import { Planet } from '@/interfaces/Planet';
import Image from 'next/image';
import React from 'react';

type PlanetPageProps = {
	params: {
		name: string;
	};
};

async function getData(name: string) {
	const response = await descriptionPlanet.find(
		(planet) => planet.name.toLowerCase() === name.toLowerCase()
	);
	return response;
}

export const generateStaticParams = async () => {
	const planet: Planet[] = await descriptionPlanet;
	return planet.map((planet: Planet) => ({
		slug: planet.name,
	}));
};

const PlanetPage = async ({ params: { name } }: PlanetPageProps) => {
	const planet = await getData(name);
	return (
		<div className='lg:grid lg:grid-cols-2 mx-[70px] text-white xs:flex xs:flex-col justify-center'>
			<div className='object-contain mt-10 xs:flex  justify-center '>
				<Image
					// @ts-ignore
					src={planet.href}
					// @ts-ignore
					alt={planet.name}
					width={400}
					height={409}
					className='object-contain'
				/>
			</div>
			<div className='xs:flex xs:flex-col  xs:items-center lg:items-start'>
				<p className='md:text-[100px] xs:text-[70px]'>{planet?.name}</p>
				<p className=' lg:px-0 md:px-[100px]'>{planet?.description}</p>
				<div className='lg:mt-[30px] flex gap-[51px] xs:mt-[70px] lg:mb-0 xs:mb-[50px]'>
					<div className='flex flex-col gap-3 '>
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
