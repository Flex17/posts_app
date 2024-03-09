import { PostI } from "@/app/lib/types";
import { PostBody, PostCard, PostTitle } from "@/app/components/posts/Post/Post.ui";

interface PostProps {
	post: PostI,
}

const Post = ({ post }: PostProps) => {
	const {
		id,
		userId,
		title,
		body,
	} = post;

	return (
		<PostCard>
			<PostTitle>{title}</PostTitle>
			<PostBody>{body}</PostBody>
		</PostCard>
	);
};

export default Post;
