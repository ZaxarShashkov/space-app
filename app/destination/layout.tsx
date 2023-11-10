const DestinationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-destination  bg-cover h-screen absolute top-0 bottom-0 left-0 right-0'>
			{children}
		</div>
	);
};

export default DestinationLayout;
