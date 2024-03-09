import { ParsedUrlQuery } from "node:querystring";
import axios from "axios";
import { AlbumI } from "@/app/lib/types";

export const AlbumsServices = {
	getAll: async (params: ParsedUrlQuery | undefined, page?: number, perPage?: number) => {
		try {
			const res = await axios("https://jsonplaceholder.typicode.com/albums", {
				params: {
					userId: params?.id,
				},
			});

			return res.data as AlbumI[];
		} catch (err) {
			throw new Error("Ошибка");
		}
	},
};
