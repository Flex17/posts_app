import { useEffect, useState } from "react";

interface useDynamicPaginationProps {
	total: number,
	fetchedLength: number,
}

export const useDynamicPagination = ({
	fetchedLength,
	total,
}: useDynamicPaginationProps) => {
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const scrollHandler = (e: any) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
			&& fetchedLength < total
		) {
			setLoading(true);
		}
	};
	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => document.removeEventListener("scroll", scrollHandler);
	});

	return {
		page,
		loading,
		setPage,
		setLoading,
	};
};
