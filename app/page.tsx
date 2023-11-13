import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<div className='bg-main bg-no-repeat bg-cover h-screen absolute top-0 bottom-0 left-0 right-0'>
				<div className='mx-[100px] mt-[200px] flex items-center justify-between'>
					<div className='text-main-text max-w-[445px] flex flex-col gap-[24px]'>
						<p className='text-lg'>SO, YOU WANT TO TRAV</p>
						<p className='text-[150px] font-bold'>SPACE</p>
						<p className='text-[18px]'>
							Let’s face it; if you want to go to space, you might as well genuinely
							go to outer space and not hover kind of on the edge of it. Well sit
							back, and relax because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<div className='w-[274px] h-[274px] bg-white  rounded-[100%] flex items-center justify-center'>
						<span className='block text-[32px] text-primary-black'>EXPLORE</span>
					</div>
				</div>
			</div>
		</>
	);
}
