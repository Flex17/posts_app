"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkWrapper, TabsWrapper } from "@/app/components/tabs/Tabs.ui";

interface TabsProps {
	userId: string;
}

const Tabs = ({ userId }: TabsProps) => {
	const pathname = usePathname();

	const ALBUMS_URL = `/${userId}/albums`;
	const POSTS_URL = `/${userId}/posts`;

	return (
		<TabsWrapper>
			<LinkWrapper $active={pathname === POSTS_URL}>
				<Link href={POSTS_URL}>Посты</Link>
			</LinkWrapper>
			<LinkWrapper $active={pathname === ALBUMS_URL}>
				<Link href={ALBUMS_URL}>Альбомы</Link>
			</LinkWrapper>
		</TabsWrapper>
	);
};

export default Tabs;
