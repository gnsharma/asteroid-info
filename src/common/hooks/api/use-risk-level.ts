import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

type Variables = { uid: string };

export const useRiskLevel = createQuery<GoogleSearchData[], Variables, Error>({
	primaryKey: "risk-level",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<GoogleSearchData[], Error>(
			`ciso/risk-level/?uid=${variables.uid}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});

type SummaryVariables = { uid: string; summary?: boolean };
export const useRiskLevelSummary = createQuery<
	GoogleSearchSummaryData[],
	SummaryVariables,
	Error
>({
	primaryKey: "risk-level-summary",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<
			GoogleSearchSummaryData[],
			Error
		>(
			`ciso/risk-level/?uid=${variables.uid}${
				variables.summary ? "&summary=true" : ""
			}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});
