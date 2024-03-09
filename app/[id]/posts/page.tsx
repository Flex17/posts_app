import React from "react";
import { Title } from "@/app/components/ui/Title.ui";
import PostsList from "@/app/components/posts/PostsList/PostsList";
import CreateForm from "@/app/components/posts/CreateForm/CreateForm";
import SearchInput from "@/app/components/posts/SearchInput/SearchInput";

interface PostsProps {
	params: { id: string };
}

const Posts = async ({ params: id }: PostsProps) => (
	<>
		<Title>Посты</Title>
		<CreateForm/>
		<SearchInput/>
		{/* @ts-expect-error Server Component */}
		<PostsList params={id}/>
	</>
);

export default Posts;
