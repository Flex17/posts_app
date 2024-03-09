import Image from "next/image";
import { PhotoI } from "@/app/lib/types";
import { PhotoCardWrapper } from "@/app/components/photos/PhotoCard/PhotoCard.ui";

interface PhotoCardProps {
	photo: PhotoI,
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
	const {
		url,
		thumbnailUrl,
	} = photo;
	
	return (
		<PhotoCardWrapper>
			<Image loading="lazy" blurDataURL={thumbnailUrl} src={url} alt="Фотография" width={400} height={400}/>
		</PhotoCardWrapper>
	);
};

export default PhotoCard;
