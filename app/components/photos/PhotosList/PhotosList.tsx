"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PostsListWrapper } from "@/app/components/posts/PostsList/PostsList.ui";
import { PhotoServices } from "@/app/lib/services/PhotoServices";
import PhotoCard from "@/app/components/photos/PhotoCard/PhotoCard";
import { PhotoI } from "@/app/lib/types";
import { useDynamicPagination } from "@/app/lib/hooks/useDynamicPagination";

const PER_PAGE = 9;
const PhotosList = () => {
	const [photos, setPhotos] = useState<PhotoI[]>([]);
	const [totalCount, setTotalCount] = useState(0);

	const params = useSearchParams();
	const albumId = params.get("albumId");

	const {
		page,
		setLoading,
		loading,
		setPage,
	} = useDynamicPagination({
		total: totalCount,
		fetchedLength: photos.length,
	});

	const fetchData = async (page: number) => {
		const {
			data,
			total,
		} = await PhotoServices.getAll(albumId, page, PER_PAGE);

		setTotalCount(total);
		setPage(prev => prev + 1);
		setPhotos(prev => [...prev, ...data]);
	};

	useEffect(() => {
		if (loading) {
			fetchData(page)
				.finally(() => {
					setLoading(false);
				});
		}
	}, [loading]);

	return (
		<PostsListWrapper>
			{
				photos.map(photo => <PhotoCard photo={photo} key={photo.id}/>)
			}
		</PostsListWrapper>
	);
};

export default PhotosList;
