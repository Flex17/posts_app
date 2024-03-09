"use client";

import { useSearchParams } from "next/navigation";
import { PostI } from "@/app/lib/types";
import { PostsListWrapper } from "@/app/components/posts/PostsList/PostsList.ui";
import Post from "@/app/components/posts/Post/Post";
import { PostServices } from "@/app/lib/services/PostServices";

interface PostsListProps {
	params: {
		id: string
	},
}

const PostsList = async ({ params }: PostsListProps) => {
	const searchParams = useSearchParams();
	const search = searchParams.get("q");

	const posts: PostI[] = await PostServices.getAll(params.id, search);

	return (
		<PostsListWrapper>
			{
				posts.map(post => <Post post={post} key={post.id}/>)
			}
		</PostsListWrapper>
	);
};

export default PostsList;
