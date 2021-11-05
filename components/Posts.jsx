import Post from './Post';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase';

// const posts = [
// 	{
// 		id: 1,
// 		img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		userImg:
// 			'https://images.unsplash.com/photo-1464863979621-258859e62245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80',
// 		username: 'Toa Heftiba',
// 		caption: 'I am awesome',
// 	},
// 	{
// 		id: 2,
// 		img: 'https://images.unsplash.com/photo-1608015858041-f28d2514e8a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		userImg:
// 			'https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
// 		username: 'Michael Dam',
// 		caption: 'I am awesome',
// 	},
// ];

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),
		[db]
	);

	// console.log(posts);
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					img={post.data().image}
					username={post.data().username}
					caption={post.data().caption}
					userImg={post.data().profileImg}
				/>
			))}
		</div>
	);
};

export default Posts;
