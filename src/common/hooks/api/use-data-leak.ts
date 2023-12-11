import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

type Variables = { uid: string };
export const useDataLeak = createQuery<DataLeak[], Variables, Error>({
	primaryKey: "data-leak",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<DataLeak[], Error>(
			`ciso/data-leak/?uid=${variables.uid}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});

type SummaryVariables = { uid: string; summary?: boolean };
export const useDataLeakSummary = createQuery<
	DataLeakSummaryData[],
	SummaryVariables,
	Error
>({
	primaryKey: "data-leak-summary",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<DataLeakSummaryData[], Error>(
			`ciso/data-leak/?uid=${variables.uid}${
				variables.summary ? "&summary=true" : ""
			}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});
