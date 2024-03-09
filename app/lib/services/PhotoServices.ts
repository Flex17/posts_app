import axios from "axios";
import { PhotoI } from "@/app/lib/types";

export const PhotoServices = {
	getAll: async (albumId: string | null, page?: number, perPage?: number) => {
		try {
			const res = await axios("https://jsonplaceholder.typicode.com/photos", {
				params: {
					albumId,
					_page: page,
					_limit: perPage,
				},
			});

			return {
				data: res.data as PhotoI[],
				total: res.headers["x-total-count"],
			};
		} catch (err) {
			throw new Error("Ошибка");
		}
	},
};
