import { UserServices } from "@/app/lib/services/UserServices";
import { UsersListWrapper } from "@/app/components/users/UsersList/UsersList.ui";
import { UserI } from "@/app/lib/types";
import UserCard from "@/app/components/users/UserCard/UserCard";

const UsersList = async () => {
	const users: UserI[] = await UserServices.getAll();
	
	return (
		<UsersListWrapper>
			{
				users.map(user => <UserCard user={user} key={user.id}/>)
			}
		</UsersListWrapper>
	);
};

export default UsersList;
