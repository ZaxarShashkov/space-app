'use client';
import Header from '@/components/Header';
import { technology } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TechnologyLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<div className='bg-technology bg-cover lg:h-screen '>
			<Header />
			<div className='mt-[30px] mx-[90px]'>
				<p className='text-white text-[28px]'>
					<span className='opacity-25 pr-[24px] font-bold'>03 </span>SPACE LAUNCH 101
				</p>
			</div>
			<div className='text-white grid grid-cols-[0.5fr,2fr,3fr] gap-[30px] ml-[90px] mt-[50px]'>
				<div className=''>
					<ul className='flex flex-col gap-[32px]'>
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
				</div>
				{children}
			</div>
		</div>
	);
};

export default TechnologyLayout;
