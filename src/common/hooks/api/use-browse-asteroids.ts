import { queryOptions, useQuery } from "@tanstack/react-query";
import fetchWrapper from "@common/fetch";

export function useBrowseAsteroidsOptions() {
	return queryOptions({
		queryKey: ["browse-asteroid"],
		queryFn: async () => {
			const { data, error } = await fetchWrapper<any, Error>(
				`browse?api_key=${import.meta.env.VITE_API_KEY}`
			).json();
			if (error) throw new Error(error.message);
			return data;
		},
	});
}

export const useBrowseAsteroids = () => useQuery(useBrowseAsteroidsOptions());
