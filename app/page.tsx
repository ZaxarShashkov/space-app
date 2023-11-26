import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div className='bg-cover lg:h-screen lg:bg-main md:bg-mainTablet xs:bg-mainMobile'>
				<Header />
				<div className='flex-around'>
					<div className='text-main-text max-w-[445px] flex flex-col gap-[24px]'>
						<p className='text-lg'>SO, YOU WANT TO TRAVEL TO</p>
						<p className='text-large-bold lg:my-0 xs:my-6'>SPACE</p>
						<p className='text-lg px-5'>
							Let’s face it; if you want to go to space, you might as well genuinely
							go to outer space and not hover kind of on the edge of it. Well sit
							back, and relax because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<Link
						className='w-[274px] h-[274px] bg-white  rounded-[100%] flex-center lg:mt-0 lg:mb-0 xs:mt-[259px] xs:mb-[142px]'
						href={'/destination/moon'}>
						<div className='w-[274px] h-[274px] bg-white  rounded-[100%] flex-center lg:mt-0 lg:mb-0 xs:mt-[259px] xs:mb-[142px]'>
							<span className='block text-[32px] text-primary-black'>EXPLORE</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
