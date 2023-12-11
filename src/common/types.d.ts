import { useFormAction } from "react-router-dom";

type PagesType =
	| "webSearch"
	| "darkWebScan"
	| "mailBoxScanner"
	| "piiDiscovered"
	| "piiOnMaliciousSites"
	| "piiEXposureBlossoming"
	| "employeeInboxesTargeted"
	| "employeeDataHygiene"
	| "events";

type DataLeak = {
	id: number;
	email: string;
	email_type: "PERSONAL" | "BUSINESS";
	fixed_at: null | string;
	alert_date: string;
	description: string;
	exposed_classes: string[];
	icon_url: string;
	leak_date: string;
	leak_source: string;
	published: string;
	logo_link_b64: null | string;
	site: string;
	user: number;
	user_city: null | string;
	user_department: null | string;
};

type GoogleSearchData = {
	id: number;
	risk_level: string;
	status: string;
	domain_name: string;
	query: string;
	link: string;
	link_hash: string;
	page_link: string;
	title: string;
	description: string;
	rank: number;
	global_rank: number;
	data_exposed: string;
	score: number;
	last_modified: string;
	created_at: string;
	user: number;
	user_city: null | string;
	user_department: null | string;
	extra_details: {
		name: string;
		email: string;
	};
};

type VisibilityOptions =
	| "dashboard"
	| "employee_engagement"
	| "google_search"
	| "dark_web"
	| "employee_data_hygiene"
	| "always";

type MetricData = {
	label: string;
	tooltip: string;
	message_type: "action" | "info" | "alert";
	visibility: Array<VisibilityOptions>;
	value: number;
};

type ChartKey = {
	key: string;
	label: string;
	color: "red" | "green" | "yellow" | "gray";
};

type ChartData = {
	chart_type: string;
	label: string;
	tooltip: string;
	visibility: "visible";
	drilldown: string | null;
	chart_keys: Array<ChartKey>;
	data: Record<
		string,
		{
			week: string;
			open: number;
			remediated: number;
			total: number;
			retained?: number;
			not_me?: number;
		}
	>;
};

type CISOData = {
	hygiene_score: number;
	tooltip: string;
	metrics: Array<MetricData>;
	charts: Array<ChartData>;
};

type UserHygieneData = {
	metadata: {
		department: string;
		city: string;
		business_email: string;
	};
	big_advertisers_clean?: {
		label: string;
		count: number;
	};
	data_brokers_clean?: {
		label: string;
		count: number;
	};
	total_breaches?: {
		label: string;
		count: number;
	};
	open_data_breaches?: {
		label: string;
		count: number;
	};
	closed_data_breaches?: {
		label: string;
		count: number;
	};
	open_google_search_links?: {
		label: string;
		count: number;
	};
	removed_google_search_links?: {
		label: string;
		count: number;
	};
};

type EmployeeDataHygiene = {
	user_metrics: Record<number, UserHygieneData>;
};

type HygieneScoreHistoryData = {
	hygiene_score: number;
	week: string;
	poor_hygiene_users: {
    count: number,
    data?: Array<{
      email: string;
      hygiene_score: number;
    }>
  };
	fair_hygiene_users: {
    count: number,
    data?: Array<{
      email: string;
      hygiene_score: number;
    }>
  };
	good_hygiene_users: {
    count: number,
    data?: Array<{
      email: string;
      hygiene_score: number;
    }>
  };
};

type EmployeeEngagement = {
	business_email: string;
	first_name: string;
	last_name: string;
	formatted_invited_at: string;
	is_user_created: boolean;
};

type DataLeakSummaryData = {
	domain: string;
	affected_employees: number;
};

type GoogleSearchSummaryData = {
	domain: string;
	affected_employees: number;
};

type HygieneScoreUserData = {
	email: string;
	hygiene_score: number;
};

pporuser: {
  count: 9,
  data: [{
    email: useFormAction
    hygie: 59
  }]
}