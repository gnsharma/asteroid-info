import { queryOptions, useQuery } from "@tanstack/react-query";
import fetchWrapper from "@common/fetch";

export function useAsteroidInfoOptions(id: string | number) {
	return queryOptions({
		queryKey: ["asteroid", id],
		queryFn: async ({ queryKey }) => {
			const [_key, id] = queryKey;
			const { data, error } = await fetchWrapper<any, Error>(
				`${id}?api_key=${import.meta.env.VITE_API_KEY}`
			).json();
			if (error) throw new Error(error.message);
			return data;
		},
		enabled: !!id,
	});
}

export const useAsteroidInfo = (id: string | number) =>
	useQuery(useAsteroidInfoOptions(id));
