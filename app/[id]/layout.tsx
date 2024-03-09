import React from "react";
import { Wrapper } from "@/app/components/ui/Wrapper.ui";
import UserInfo from "@/app/components/user/UserInfo";
import GoBack from "@/app/components/ui/GoBack/GoBack";

interface UserLayoutProps {
	children: React.ReactNode,
	params: { id: string }
}

const UserLayout = ({
	children,
	params: id,
}: UserLayoutProps) => (
	<Wrapper>
		<GoBack backHref="/"/>
		{/* @ts-expect-error Server Component */}
		<UserInfo params={id}/>
		{children}
	</Wrapper>
);

export default UserLayout;
