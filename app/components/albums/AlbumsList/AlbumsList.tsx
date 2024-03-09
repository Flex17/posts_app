import { AlbumI } from "@/app/lib/types";
import AlbumCard from "@/app/components/albums/AlbumsCard/AlbumCard";
import { AlbumsListWrapper } from "@/app/components/albums/AlbumsList/AlbumsList.ui";

interface AlbumsListProps {
	albums: AlbumI[];
}

const AlbumsList = ({ albums }: AlbumsListProps) => (
	<AlbumsListWrapper>
		{
			albums.map((album) => <AlbumCard album={album} key={album.id}/>)
		}
	</AlbumsListWrapper>
);

export default AlbumsList;
