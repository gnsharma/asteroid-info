import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

type Variables = { uid: string };

export const useEmployeeDataHygiene = createQuery<
	EmployeeDataHygiene,
	Variables,
	Error
>({
	primaryKey: "employee-data-hygiene",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<EmployeeDataHygiene, Error>(
			`ciso/employee-data-hygiene/?uid=${variables.uid}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});
