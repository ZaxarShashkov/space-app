'use client';
import Header from '@/components/Header';
import { technology } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TechnologyLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<div className='lg:bg-technology md:bg-technologyTablet xs:bg-technologyMobile bg-cover lg:h-screen lg:overflow-hidden '>
			<Header />
			<div className='mt-[30px] mx-[90px] lg:block xs:flex xs:justify-center'>
				<p className='text-white text-[28px]'>
					<span className='opacity-25 pr-[24px] font-bold'>03 </span>SPACE LAUNCH 101
				</p>
			</div>
			<div className='text-white lg:grid lg:grid-cols-[0.5fr,2fr,3fr] lg:gap-[30px] lg:ml-[90px] lg:mt-[50px] '>
				<ul className='flex lg:flex-col gap-[32px] xs:justify-center xs:mt-10 lg:mt-0 lg:justify-normal'>
					{technology.map((link, i) => {
						return (
							<li key={link.title}>
								<Link
									href={`/technology/${link.slug}`}
									className={`flex items-center justify-center w-[80px] h-[80px] rounded-[50%] ${
										pathname === `/technology/${link.slug}`
											? 'border-2 border-slate-600  text-white '
											: 'bg-white text-black'
									}`}>
									<span className='text-[32px] opacity-100'>{i + 1}</span>
								</Link>
							</li>
						);
					})}
				</ul>
				{children}
			</div>
		</div>
	);
};

export default TechnologyLayout;
