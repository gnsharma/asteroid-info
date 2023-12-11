import { useLayoutEffect } from "react";

export function useDocumentTitle(title: string): void {
	useLayoutEffect(() => {
		window.document.title = title;

		return () => {
			window.document.title = "CISO - Confidently";
		};
	}, [title]);
}
