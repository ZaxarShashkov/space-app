import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<div className='bg-cover h-screen  lg:bg-main md:bg-mainTablet sm:bg-mainMobile overflow-hidden'>
				<Header />
				<div className='flex-around'>
					<div className='text-main-text max-w-[445px] flex flex-col gap-[24px]'>
						<p className='text-lg'>SO, YOU WANT TO TRAVEL TO</p>
						<p className='text-large-bold'>SPACE</p>
						<p className='text-lg'>
							Let’s face it; if you want to go to space, you might as well genuinely
							go to outer space and not hover kind of on the edge of it. Well sit
							back, and relax because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<div className='w-[274px] h-[274px] bg-white  rounded-[100%] flex-center mt-10'>
						<span className='block text-[32px] text-primary-black'>EXPLORE</span>
					</div>
				</div>
			</div>
		</>
	);
}
