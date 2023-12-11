import { createQuery } from "react-query-kit";

import fetchWrapper from "@common/fetch";

const API_KEY = "TfimAnw2AaWE0wbQhlFRtcn35hlOa9Bh5Ikt8dZE";
type Variables = { id: string };

export const useAsteroidInfo = createQuery<any, Variables, Error>({
	primaryKey: "asteroid",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<any, Error>(
			`https://api.nasa.gov/neo/rest/v1/neo/${variables.id}?api_key=${API_KEY}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});

export const useAsteroidSearch = createQuery<any, Variables, Error>({
	primaryKey: "asteroid-search",
	queryFn: async ({ queryKey: [_, variables] }) => {
		const { data, error } = await fetchWrapper<any, Error>(
			`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`
		).json();
		if (error) throw new Error(error.message);
		return data;
	},
	suspense: false,
});
