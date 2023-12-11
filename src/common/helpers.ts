import { themeVariables } from "@/theme";

export const HYGIENE_SCORE_LABELS = {
	poor: "Poor",
	fair: "Fair",
	good: "Good",
	scanning: "Scanning",
};

export function titleCase(str: string) {
	const splitStr = str.toLowerCase().replace(/_/g, " ").split(" ");
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] =
			splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(" ");
}

export const getHygieneScoreColorAndLabel = (score: number | undefined) => {
	if (score == undefined) return { color: "", label: "" };
	if (score === -1)
		return { color: "#AFAFAF", label: HYGIENE_SCORE_LABELS.scanning };
	if (score >= 0 && score <= 33)
		return {
			color: themeVariables.colors.alert.main,
			label: HYGIENE_SCORE_LABELS.poor,
		};
	if (score >= 34 && score <= 66)
		return {
			color: themeVariables.colors.warning.main,
			label: HYGIENE_SCORE_LABELS.fair,
		};
	if (score >= 67 && score <= 100)
		return {
			color: themeVariables.colors.success.main,
			label: HYGIENE_SCORE_LABELS.good,
		};
	return { color: "", label: "" };
};
