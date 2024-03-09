import { Wrapper } from "@/app/components/ui/Wrapper.ui";
import { Title } from "@/app/components/ui/Title.ui";
import UsersList from "@/app/components/users/UsersList/UsersList";

const Users = () => (
	<Wrapper>
		<Title>Пользователи</Title>
		{/* @ts-expect-error Server Component */}
		<UsersList/>
	</Wrapper>
);

export default Users;
