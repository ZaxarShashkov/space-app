import Header from '@/components/Header';

const CrewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-crew  bg-cover h-screen'>
			<Header />
			<p className='text-white mt-[75px] ml-[165px] text-[28px]'>
				<span className='opacity-25 pr-[24px]'>02 </span>MEET YOUR CREW
			</p>
			{children}
		</div>
	);
};

export default CrewLayout;
