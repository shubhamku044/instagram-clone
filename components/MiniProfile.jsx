const MiniProfile = () => {
	return (
		<div className="flex mt-14 ml-10 items-center justify-between">
			<img
				src="/myphoto.jpg"
				alt="My photo"
				className="h-16 w-16 rounded-full p-[2px] "
			/>
			<div className="flex-1 mx-4">
				<h2 className="font-bold">shubhamku044</h2>
				<h3 className="text-sm text-gray-500">Welcome to instagram</h3>
			</div>

			<button className="font-semibold text-sm text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out">
				Sign Out
			</button>
		</div>
	);
};

export default MiniProfile;
