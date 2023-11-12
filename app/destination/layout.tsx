import { descriptionPlanet } from '@/constants';
import Link from 'next/link';

const DestinationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-destination bg-cover h-screen absolute top-0 bottom-0 left-0 right-0'>
			<div className='grid grid-cols-2 gap-[257px]'>
				<div className='mt-[262px] ml-[286px]'>
					<p className='text-[28px] text-white'>
						<span className='font-bold'>01 </span>
						PICK YOUR DESTINATION
					</p>
				</div>
				<div className='text-white flex gap-[36px] mt-[360px] mr-[626px]'>
					{descriptionPlanet.map((planet) => (
						<ul key={planet.name}>
							<li>
								<Link href={`/destination/${planet.name}`}>{planet.name}</Link>
							</li>
						</ul>
					))}
				</div>
			</div>
			<div className='flex justify-around'>{children}</div>
		</div>
	);
};

export default DestinationLayout;
