import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

const Feed = () => {
	const { data: session } = useSession();

	return (
		<main
			className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl  mx-auto ${
				session
					? 'xl:grid-cols-3 xl:max-w-6xl'
					: 'xl:grid-cols-2 xl:max-w-3xl'
			}`}
		>
			{/* Section */}
			<section className="col-span-2 mx-5">
				{/* Stories */}
				<Stories />
				<Posts />
				{/* Posts */}
			</section>

			{/* Section */}
			{session && (
				<section className="hidden xl:inline-grid md:col-span-1">
					<div className="fixed top-20">
						<MiniProfile />
						{/* MiniProfiles */}
						<Suggestions />
						{/* Suggestions */}
					</div>
				</section>
			)}
		</main>
	);
};

export default Feed;
