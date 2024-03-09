import axios from "axios";

export const PostServices = {
	getAll: async (userId: string, q: string | null) => {
		try {
			const res = await axios("https://jsonplaceholder.typicode.com/posts", {
				params: {
					userId,
					q,
				},
			});

			return res.data;
		} catch (err) {
			throw new Error("Ошибка");
		}
	},
	create: async (userId: string, title: string, body: string) => {
		try {
			const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
				data: {
					userId,
					title,
					body,
				},
			});

			return res.data;
		} catch (err) {
			throw new Error("Ошибка");
		}
	},
};
