export const getFullMonth = (month: number) =>
	month < 10 ? `0${month}` : month;

export const getFullDate = (date: number) => (date < 10 ? `0${date}` : date);

export const getFormattedDate = (date: Date) =>
	`${getFullMonth(date.getMonth() + 1)}-${getFullDate(
		date.getDate()
	)}-${date.getFullYear()}`;

export function titleCase(str: string) {
	const splitStr = str.toLowerCase().replace(/_/g, " ").split(" ");
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] =
			splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(" ");
}
