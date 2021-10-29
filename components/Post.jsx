import {
	PaperAirplaneIcon,
	PlusCircleIcon,
	HeartIcon,
	UserGroupIcon,
	DotsHorizontalIcon,
	ChatIcon,
	BookmarkIcon,
	EmojiHappyIcon,
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

const Post = ({ id, username, userImg, caption, img }) => {
	return (
		<div className="bg-white my-7 border rounded-sm">
			<div className="flex items-center p-5">
				<img
					src={userImg}
					alt={username}
					className="rounded-full h-12 w-12 mr-3 border p-1"
				/>
				<p className="flex-1 font-semibold">{username}</p>
				<DotsHorizontalIcon className="h-5" />
			</div>
			<img src={img} alt="Feed Post" className="object-cover w-full " />

			<div className="flex justify-between px-4 pt-4">
				<div className="flex space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn rotate-45" />
				</div>
				<BookmarkIcon className="btn" />
			</div>

			<p className="p-5 truncate">
				<span className="font-bold mr-1">{username}</span>&nbsp;{' '}
				{caption}
			</p>

			{/* comments */}

			{/* Input box */}
			<form className="flex items-center p-4">
				<EmojiHappyIcon className="h-7 " />
				<input
					type="text"
					placeholder="Add a comment..."
					className="border-none flex-1 focus:ring-0 outline-none"
				/>
				<button className="font-semibold text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out">
					Post
				</button>
			</form>
		</div>
	);
};

export default Post;
