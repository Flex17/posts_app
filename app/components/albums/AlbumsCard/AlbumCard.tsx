"use client";

import Link from "next/link";
import { AlbumI } from "@/app/lib/types";
import { AlbumCardWrapper, AlbumLinkWrapper } from "@/app/components/albums/AlbumsCard/AlbumCard.ui";

interface AlbumCardProps {
	album: AlbumI,
}

const AlbumCard = ({ album }: AlbumCardProps) => {
	const {
		id,
		title,
	} = album;

	return (
		<AlbumCardWrapper>
			<Link href={`/photos?albumId=${id}`}>
				<AlbumLinkWrapper>
					{title}
				</AlbumLinkWrapper>
			</Link>
		</AlbumCardWrapper>
	);
};

export default AlbumCard;
