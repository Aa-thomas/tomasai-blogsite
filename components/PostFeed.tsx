import { useSession } from 'next-auth/react';
import PostItem from './PostItem';

interface PostFeedProps {
	posts: Post[];
}

const PostFeed = ({ posts }: PostFeedProps) => {
	console.log('PostFeed', posts.length);

	return (
		<div>
			{posts.length > 0 ? (
				posts.map((post) => (
					<PostItem key={post.id} post={post} likes={post.likes} />
				))
			) : (
				<p>No posts to display</p>
			)}
		</div>
	);
};

export default PostFeed;

// convert posts into postItem type and pass to post item component
