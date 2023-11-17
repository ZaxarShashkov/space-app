import Header from '@/components/Header';
import { crew } from '@/constants';
import Link from 'next/link';

const CrewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-crew  bg-cover h-screen lg:overflow-hidden'>
			<Header />
			<div className=''>{children}</div>
			
		</div>
	);
};

export default CrewLayout;
