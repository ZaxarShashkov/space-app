'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Menu from './Menu';

const Header = () => {
	const [visible, setVisible] = useState<boolean>(false);

	const handleClick = () => {
		setVisible(!visible);
	};

	return (
		<header className='relative flex justify-between items-center lg:pt-8 xs:p-8'>
			<div className='ml-8'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={32}
					height={32}
					className='object-contain'
				/>
			</div>
			<nav className='justify-center items-center lg:min-w-[830px] md:min-w-[550px] h-[93px] bg-header-bg backdrop-blur-[42px] md:flex xs:hidden'>
				<ul className='flex justify-center lg:gap-12 md:gap-8 text-base text-white '>
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
					<Link href='/crew/commander'>
						<li>
							<span className='font-bold'>02</span> CREW
						</li>
					</Link>
					<Link href='/technology/Launch'>
						<li>
							<span className='font-bold'>03</span> TECHNOLOGY
						</li>
					</Link>
				</ul>
			</nav>
			<div className={`md:hidden  mr-5 ${visible ? 'xs:hidden' : 'xs:block'}`}>
				<Image
					src={'/icon-hamburger.svg'}
					alt='hamburger'
					width={30}
					height={30}
					onClick={handleClick}
				/>
			</div>
			{visible ? <Menu /> : null}
		</header>
	);
};

export default Header;
