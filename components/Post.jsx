import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from '@firebase/firestore';
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
import { db } from '../firebase';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

const Post = ({ id, username, userImg, caption, img }) => {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState('');
	const { data: session } = useSession();
	const [likes, setLikes] = useState([]);
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'posts', id, 'comments'),
					orderBy('timestamp', 'desc')
				),
				(snapshot) => setComments(snapshot.docs)
			),
		[db]
	);
	const sendComment = async (e) => {
		e.preventDefault();

		const commentToSend = comment;
		setComment('');

		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment: commentToSend,
			username: session.user.username,
			userImage: session.user.image,
			timestamp: serverTimestamp(),
		});
	};

	useEffect(
		() =>
			onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
				setLikes(snapshot.docs)
			),
		[db]
	);

	useEffect(
		() =>
			setHasLiked(
				likes.findIndex((like) => like.id === session?.user?.uid) !== -1
			),
		[likes]
	);

	const likePost = async () => {
		if (hasLiked) {
			await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
		} else {
			await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
				username: session.user.username,
			});
		}
	};

	// console.log(comments);
	// console.log(hasLiked);

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
			{session && (
				<div className="flex justify-between px-4 pt-4">
					<div className="flex space-x-4">
						{hasLiked ? (
							<HeartIconFilled
								onClick={likePost}
								className="btn text-red-600"
							/>
						) : (
							<HeartIcon onClick={likePost} className="btn" />
						)}

						<ChatIcon className="btn" />
						<PaperAirplaneIcon className="btn rotate-45" />
					</div>
					<BookmarkIcon className="btn" />
				</div>
			)}
			{/* caption */}
			<p className="p-5 truncate">
				{likes.length > 0 && (
					<p className="font-bold mb-1">{likes.length} Likes</p>
				)}
				<span className="font-bold mr-1">{username}</span>&nbsp;{' '}
				{caption}
			</p>

			{/* comments */}

			{comments.length > 0 && (
				<div className="ml-10 h-14 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
					{comments.map((comment) => (
						<div
							key={comment.id}
							className="flex items-center space-x-2 mb-4"
						>
							<img
								src={comment.data().userImage}
								alt="profile image"
								className="h-7 rounded-full"
							/>
							<p className="text-sm flex-1">
								<span className="font-bold">
									{comment.data().username}&nbsp;&nbsp;
								</span>
								{comment.data().comment}
							</p>
							<Moment fromNow className="pr-5 text-xs">
								{comment.data().timestamp?.toDate()}
							</Moment>
						</div>
					))}
				</div>
			)}

			{/* Input box */}
			{session && (
				<form className="flex items-center p-4">
					<EmojiHappyIcon className="h-7 " />
					<input
						type="text"
						placeholder="Add a comment..."
						className="border-none flex-1 focus:ring-0 outline-none"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<button
						disabled={!comment.trim()}
						onClick={sendComment}
						type="submit"
						className="font-semibold text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out"
					>
						Post
					</button>
				</form>
			)}
		</div>
	);
};

export default Post;
