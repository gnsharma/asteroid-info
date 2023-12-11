import {
	CHART_BACKGROUND_COLORS,
	CHART_BORDER_COLORS,
} from "@common/constants";
import { themeVariables } from "@/theme";

export const getFullMonth = (month: number) =>
	month < 10 ? `0${month}` : month;

export const getFullDate = (date: number) => (date < 10 ? `0${date}` : date);

export const getFormattedDate = (date: Date) =>
	`${getFullMonth(date.getMonth() + 1)}-${getFullDate(
		date.getDate()
	)}-${date.getFullYear()}`;

type ChartInput = {
	chartKeys: Array<ChartKey>;
	chartData: Record<string, Record<string, string | number>>;
};

export const generateLineChartData = ({ chartKeys, chartData }: ChartInput) => {
	if (!Object.keys(chartData).length || chartKeys.length === 0) {
		return { datasets: [] };
	}

	return {
		datasets: chartKeys.map((chartKey) => {
			return {
				label: chartKey.label,
				data: Object.values(chartData).map((dataPoint) => ({
					x: dataPoint.week,
					y: dataPoint[chartKey.key],
				})),
				borderColor: CHART_BORDER_COLORS[chartKey.color],
				backgroundColor: CHART_BACKGROUND_COLORS[chartKey.color],
			};
		}),
	};
};

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
