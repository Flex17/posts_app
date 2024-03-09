import { ParsedUrlQuery } from "node:querystring";
import axios from "axios";

export const UserServices = {
	getAll: async (params?: ParsedUrlQuery | undefined, page?: number, perPage?: number) => {
		try {
			const res = await axios("https://jsonplaceholder.typicode.com/users", { params });

			return res.data;
		} catch (err) {
			throw new Error("Ошибка");
		}
	},
};
