'use client';
import Header from '@/components/Header';
import { descriptionPlanet } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DestinationLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	return (
		<div className='lg:bg-destination md:bg-destinationTablet xs:bg-destinationMobile bg-cover lg:h-screen lg:overflow-hidden'>
			<Header />
			<div className='lg:grid lg:grid-cols-2 mx-[70px] xs:flex xs:flex-col items-center justify-center'>
				<div className='mt-[30px]'>
					<p className='md:text-[28px] xs:text-xl text-white'>
						<span className='font-bold'>01 </span>
						PICK YOUR DESTINATION
					</p>
				</div>
				<div className='text-white flex gap-[36px] mt-[70px]'>
					{descriptionPlanet.map((planet) => (
						<ul key={planet.name}>
							<li>
								<Link
									href={`/destination/${planet.name}`}
									className={`${
										pathname === `/destination/${planet.name}`
											? 'border-b-2'
											: 'border-b-0'
									}`}>
									{planet.name}
								</Link>
							</li>
						</ul>
					))}
				</div>
			</div>
			<>{children}</>
		</div>
	);
};

export default DestinationLayout;
