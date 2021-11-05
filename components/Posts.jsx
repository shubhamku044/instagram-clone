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
// 	{
// 		id: 3,
// 		img: 'https://images.unsplash.com/photo-1605643097366-2ebbc7aeb96b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		userImg:
// 			'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		username: 'Peyman Farmani',
// 		caption: 'I am awesome',
// 	},
// 	{
// 		id: 4,
// 		img: 'https://images.unsplash.com/photo-1614586312755-49ac117e6d5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		userImg:
// 			'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		username: 'Peyman Farmani',
// 		caption: 'I am awesome',
// 	},
// 	{
// 		id: 5,
// 		img: 'https://images.unsplash.com/photo-1616715279061-5ef5578b6faa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		userImg:
// 			'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
// 		username: 'Raphael Lovaski',
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
