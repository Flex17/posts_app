"use client";

import { ChangeEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormInput } from "@/app/components/ui/FormInput.ui";
import { useCreateQuery } from "@/app/lib/hooks/useCreateQuery";

const SearchInput = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const { createQueryString } = useCreateQuery();

	const search = searchParams.get("q");

	const [value, setValue] = useState(() => search || "");
	
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		router.push(`${pathname}?${createQueryString("q", e.target.value)}`);
	};

	return (
		<FormInput placeholder="Поиск по постам" value={value} onChange={handleSearch}/>
	);
};

export default SearchInput;
