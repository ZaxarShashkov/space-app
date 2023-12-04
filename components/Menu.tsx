import Link from 'next/link';
import React from 'react';

type Props = {};

const Menu = (props: Props) => {
	return (
		<div className='flex flex-col  '>
			<nav>
				<ul className='flex flex-col justify-center lg:gap-12 md:gap-8 text-base text-white '>
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
		</div>
	);
};

export default Menu;
