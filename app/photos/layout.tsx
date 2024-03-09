import React from "react";
import { Wrapper } from "@/app/components/ui/Wrapper.ui";
import { Title } from "@/app/components/ui/Title.ui";
import GoBack from "@/app/components/ui/GoBack/GoBack";

const PhotosLayout = ({ children }: { children: React.ReactNode }) => (
	<Wrapper>
		<GoBack/>
		<Title>Фотографии</Title>
		{children}
	</Wrapper>
);

export default PhotosLayout;
