import Image from "next/image";
import {
	UserInfoBlock,
	UserInfoDivider,
	UserInfoMain,
	UserInfoName,
	UserInfoText,
	UserInfoWrapper,
} from "@/app/components/user/User.ui";
import UserIcon from "@/public/userIcon.svg";
import Tabs from "@/app/components/tabs/Tabs";
import { UserI } from "@/app/lib/types";
import { UserServices } from "@/app/lib/services/UserServices";

const UserInfo = async ({ params: id }: { params: { id: string } }) => {
	const user: UserI[] = await UserServices.getAll(id);

	const {
		address,
		email,
		website,
		name,
		company,
		phone,
		username,
	} = user[0];

	const {
		city,
		street,
	} = address;

	return (
		<>
			<UserInfoWrapper>
				<UserInfoMain>
					<Image priority={false} src={UserIcon} alt="Фото пользователя" width="100"/>
					<UserInfoName>{name}</UserInfoName>
				</UserInfoMain>
				<UserInfoDivider>Дополнительная информация:</UserInfoDivider>
				<UserInfoBlock>
					<UserInfoText>Никнейм: {username}</UserInfoText>
					<UserInfoText>Город: {city}</UserInfoText>
					<UserInfoText>Улица: {street}</UserInfoText>
					<UserInfoText>E-mail: {email}</UserInfoText>
					<UserInfoText>Website: {website}</UserInfoText>
					<UserInfoText>Телефон: {phone}</UserInfoText>
					<UserInfoText>Компания: {company.name}</UserInfoText>
				</UserInfoBlock>
			</UserInfoWrapper>
			<Tabs userId={id.id}/>
		</>
	);
};

export default UserInfo;
