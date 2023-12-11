import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

type Variables = { uid: string };

export const useHygieneScoreHistory = createQuery<
	Array<HygieneScoreHistoryData>,
	Variables,
	Error
>({
	primaryKey: "hygiene-score-history",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<
			Record<string, HygieneScoreHistoryData>,
			Error
		>(`ciso/hygiene-score-history/?uid=${variables.uid}`).json();
		if (error) throw new Error(error.message);
		return Object.values(data).sort((first, second) => {
			return new Date(first.week).getTime() - new Date(second.week).getTime();
		});
	},
	suspense: false,
});
