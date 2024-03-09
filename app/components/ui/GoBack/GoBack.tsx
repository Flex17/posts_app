"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/public/leftArrow.svg";
import { GoBackText, GoBackWrapper } from "@/app/components/ui/GoBack/GoBack.ui";

const GoBack = ({ backHref }: { backHref?: string }) => {
	const router = useRouter();
	const goBack = () => {
		if (backHref) {
			router.push(backHref);
		} else {
			router.back();
		}
	};
	return (
		<GoBackWrapper onClick={goBack}>
			<Image priority={false} src={ArrowIcon} alt="Стрелка назад" width="40"/>
			<GoBackText>Назад</GoBackText>
		</GoBackWrapper>
	);
};

export default GoBack;
