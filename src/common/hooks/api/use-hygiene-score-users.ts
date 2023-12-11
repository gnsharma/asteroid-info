import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

type Variables = { uid: string };

export const useHygieneScoreUsers = createQuery<
	Array<HygieneScoreUserData>,
	Variables,
	Error
>({
	primaryKey: "hygiene-score-users",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<
			Array<HygieneScoreUserData>,
			Error
		>(`ciso/hygiene-score-users/?uid=${variables.uid}`).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});
