import Image from 'next/image';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='relative flex justify-between items-center pt-8'>
			<div className='ml-8'>
				<Image
					src='/favicon-32x32.png'
					alt='logo'
					width={32}
					height={32}
					className='object-contain'
				/>
			</div>
			<nav className='flex justify-center items-center min-w-[830px] h-[93px] bg-slate-600 '>
				<ul className='flex justify-center gap-12 text-base text-white'>
					<li>
						<span className='font-bold'>00</span> HOME
					</li>
					<li>
						<span className='font-bold'>01</span> DESTINATION
					</li>
					<li>
						<span className='font-bold'>02</span> CREW
					</li>
					<li>
						<span className='font-bold'>03</span> TECHNOLOGY
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
