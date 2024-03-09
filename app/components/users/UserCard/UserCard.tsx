import Image from "next/image";
import Link from "next/link";
import { UserI } from "@/app/lib/types";
import {
	UserCardDescription,
	UserCardInfo,
	UserCardName,
	UserCardNameBlock,
	UserCardNick,
	UserCardWrapper,
} from "@/app/components/users/UserCard/UserCard.ui";
import UserIcon from "@/public/userIcon.svg";

interface UserProps {
	user: UserI,
}

const UserCard = ({ user }: UserProps) => {
	const {
		id,
		email,
		name,
		username,
	} = user;

	return (
		<UserCardWrapper>
			<Link href={`${id}/posts`}>
				<UserCardInfo>
					<UserCardNameBlock>
						<Image priority={false} src={UserIcon} alt="Иконка пользователя" width={40}/>
						<UserCardNick>{username}</UserCardNick>
					</UserCardNameBlock>
					<UserCardDescription>
						<UserCardName>Имя: {name}</UserCardName>
						<span>E-mail: {email}</span>
					</UserCardDescription>
				</UserCardInfo>
			</Link>
		</UserCardWrapper>
	);
};

export default UserCard;
