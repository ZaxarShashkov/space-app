import Header from '@/components/Header';
import { technology } from '@/constants';
import Link from 'next/link';

const TechnologyLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-technology  bg-cover h-screen'>
			<Header />
			<div className='mt-[30px] mx-[90px]'>
				<p className='text-white text-[28px]'>
					<span className='opacity-25 pr-[24px] font-bold'>02 </span>MEET YOUR CREW
				</p>
			</div>
			<div className='text-white grid grid-cols-[0.5fr,2fr,3fr] gap-[100px] ml-[90px] mt-[50px]'>
				<div className=''>
					<ul className='flex flex-col gap-[32px]'>
						{technology.map((link, i) => {
							return (
								<li key={link.title}>
									<Link
										href={`/technology/${link.slug}`}
										className='flex items-center justify-center w-[80px] h-[80px] rounded-[50%] bg-white'>
										<span className='text-[32px] text-black'>{i + 1}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				{/* <div className=''>grid grid-cols-[200px_minmax(900px,_1fr)_100px]</div>
				<div className=''>grid grid-cols-[200px_minmax(900px,_1fr)_100px]</div> */}
				{children}
			</div>
		</div>
	);
};

export default TechnologyLayout;
