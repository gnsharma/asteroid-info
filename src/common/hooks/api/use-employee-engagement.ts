import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

type Variables = { uid: string };

export const useEmployeeEngagement = createQuery<
	EmployeeEngagement[],
	Variables,
	Error
>({
	primaryKey: "employee-engagement",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<EmployeeEngagement[], Error>(
			`ciso/employee-engagement/?uid=${variables.uid}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});
