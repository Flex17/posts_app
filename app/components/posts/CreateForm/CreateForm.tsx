"use client";

import { FormEvent, useState } from "react";
import { useParams } from "next/navigation";
import { Form } from "@/app/components/posts/CreateForm/CreateForm.ui";
import { Button } from "@/app/components/ui/Button.ui";
import { FormInput } from "@/app/components/ui/FormInput.ui";
import { PostServices } from "@/app/lib/services/PostServices";

const CreateForm = () => {
	const params = useParams();
	const { id } = params;

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (typeof id === "string" && title.length * body.length !== 0) {
			const res = await PostServices.create(id, title, body);
			
			setTitle("");
			setBody("");

			const { data } = res;

			alert(`Пост с заголовком: "${
				data.title
			}" успешно создан, но функционал json-placeholder не дает возможности его адекатно отобразить`);
		} else {
			alert("Что-то пошло не так...");
		}
	};
	return (
		<Form onSubmit={onSubmit}>
			<FormInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Заголовок"/>
			<FormInput value={body} onChange={e => setBody(e.target.value)} placeholder="Текст"/>
			<Button>Создать пост</Button>
		</Form>
	);
};

export default CreateForm;
