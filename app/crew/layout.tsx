import Header from '@/components/Header';

const CrewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-crew  bg-cover h-screen absolute top-0 bottom-0 left-0 right-0'>
			{children}
		</div>
	);
};

export default CrewLayout;
