import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='relative flex justify-between items-center pt-8 z-10 '>
			<div className='ml-8'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={32}
					height={32}
					className='object-contain'
				/>
			</div>
			<nav className='flex justify-center items-center min-w-[830px] h-[93px] bg-header-bg backdrop-blur-[42px] '>
				<ul className='flex justify-center gap-12 text-base text-white'>
					<Link href='/'>
						<li>
							<span className='font-bold'>00</span> HOME
						</li>
					</Link>
					<Link href='/destination/Moon'>
						<li>
							<span className='font-bold'>01</span> DESTINATION
						</li>
					</Link>
					<Link href='/crew'>
						<li>
							<span className='font-bold'>02</span> CREW
						</li>
					</Link>

					<Link href='technology'>
						<li>
							<span className='font-bold'>03</span> TECHNOLOGY
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
