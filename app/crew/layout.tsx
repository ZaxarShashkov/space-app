import Header from '@/components/Header';
import { crew } from '@/constants';
import Link from 'next/link';

const CrewLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='lg:bg-crew md:bg-crewTablet xs:bg-crewMobile  bg-cover  lg:overflow-hidden  lg:h-screen '>
			<Header />
			<div className=''>{children}</div>
		</div>
	);
};

export default CrewLayout;
