import { Title } from "@/app/components/ui/Title.ui";
import { AlbumsServices } from "@/app/lib/services/AlbumsServices";
import AlbumsList from "@/app/components/albums/AlbumsList/AlbumsList";

interface AlbumsProps {
	params: { id: string };
}

const Albums = async ({ params: userId }: AlbumsProps) => {
	const albums = await AlbumsServices.getAll(userId);

	return (
		<>
			<Title>Альбомы</Title>
			<AlbumsList albums={albums}/>
		</>
	);
};

export default Albums;
