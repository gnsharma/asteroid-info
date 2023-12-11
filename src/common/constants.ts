import { themeVariables } from "@/theme";

export const CHART_BORDER_COLORS = {
	red: themeVariables.colors.alert.main,
	green: themeVariables.colors.success.main,
	yellow: themeVariables.colors.warning.main,
	gray: themeVariables.colors.text.primary,
};

export const CHART_BACKGROUND_COLORS = {
	red: `${themeVariables.colors.alert.main}80`,
	green: `${themeVariables.colors.success.main}80`,
	yellow: `${themeVariables.colors.warning.main}80`,
	gray: `${themeVariables.colors.text.primary}80`,
};

export const PAGES = {
	dashboard: { path: "dashboard", text: "Dashboard", icon: "nav-dashboard" },
	google_search: {
		path: "google-search",
		text: "Google Search",
		icon: "nav-googlesearch",
	},
	dark_web: {
		path: "dark-web-scan",
		text: "Dark Web Scan",
		icon: "nav-darkweb",
	},
	employee_data_hygiene: {
		path: "employee-data-hygiene",
		text: "Employee Data Hygiene",
		icon: "nav-archive",
	},
	employee_engagement: {
		path: "employee-engagement",
		text: "Employee Engagement",
		icon: "nav-archive",
	},
	always: {
		path: "always",
		text: "Always",
		icon: "",
	},
} satisfies Record<
	VisibilityOptions,
	{ path: string; text: string; icon: string }
>;
