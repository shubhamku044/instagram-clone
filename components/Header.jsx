import Image from 'next/image';
import { HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid';

import {
	PaperAirplaneIcon,
	PlusCircleIcon,
	HeartIcon,
	UserGroupIcon,
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/* Left */}
				<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
						alt="Instagram Logo"
					/>
				</div>
				<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
						alt="Instagram Logo"
					/>
				</div>

				{/* Middle */}
				<div className="max-w-xs">
					<div className="relative p-3 rounded-md mt-1">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							type="text"
							className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
					<div className="relative navBtn">
						<PaperAirplaneIcon className="navBtn rotate-45" />
						<div className="absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />
					<img
						src="/myphoto.jpg"
						alt="Profile Picture"
						className="rounded-full cursor-pointer h-10 w-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
