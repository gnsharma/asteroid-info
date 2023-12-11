import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const themeVariables = {
	colors: {
		primary: {
			main: "#5297FF",
		},
		text: {
			primary: "#323C47",
			secondary: "#959595",
		},
		warning: {
			main: "#FFD23D",
		},
		success: {
			main: "#43B907",
		},
		alert: {
			main: "#F50F0F",
		},
		background: {
			default: "#F6F8FC",
		},
	},
};

const defaultMuiTheme = createTheme();

const commonTypography = {
	fontFamily: '"DM Sans", "DM Serif Text", "Poppins", sans-serif',
	fontWeight: 500,
	lineHeight: 1.37,
};

let theme = createTheme(defaultMuiTheme, {
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
		},
	},
	palette: {
		primary: {
			main: "#5297FF",
		},
		text: {
			primary: "#323C47",
			secondary: "#959595",
		},
		warning: {
			main: "#FFD23D",
		},
		success: {
			main: "#43B907",
		},
		background: {
			default: "#F6F8FC",
		},
	},
	spacing: (factor) => `${0.125 * factor}rem`,
	typography: {
		fontFamily: '"DM Sans", "DM Serif Text", "Poppins", sans-serif',
		fontSize: "0.9375rem",
		h1: {
			fontSize: "1.6625rem",
			...commonTypography,
		},
		h2: {
			fontSize: "1.625rem",
			...commonTypography,
		},
		h3: {
			fontSize: "1.5875rem",
			...commonTypography,
		},
		h4: {
			fontSize: "1.5625rem",
			...commonTypography,
		},
		h5: {
			fontSize: "1.125rem",
			...commonTypography,
		},
		h6: {
			fontSize: "0.9375rem",
			...commonTypography,
		},
		body1: {
			fontSize: "0.9375rem",
			fontFamily: '"DM Sans", "DM Serif Text", "Poppins", sans-serif',
		},
		caption: {
			fontSize: "0.8125rem",
			fontFamily: '"DM Sans", "DM Serif Text", "Poppins", sans-serif',
		},
		formLabel: {
			fontSize: "0.875rem",
			fontWeight: 700,
			color: "#6d6d6d",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: (ownerState, theme) => {
					const baseStyles = {
						display: "inline-block",
						px: "1.25rem",
						py: "0.6rem",
						color: "#6f6b7d",
						textAlign: "center",
						verticalAlign: "middle",
						cursor: "pointer",
						userSelect: "none",
						backgroundColor: "transparent",
						border: "1px solid transparent",
						borderRadius: "0.375rem",
						transition: "all 0.2s ease-in-out",
						"@media (prefers-reduced-motion: reduce)": {
							transition: "none",
						},
					};

					if (ownerState.ownerState.variant === "contained") {
						return {
							...baseStyles,
							backgroundColor: "#5297ff",
							borderColor: "#5297ff",
							color: "#fff",
						};
					}
					return baseStyles;
				},
				outlined: {
					background: "none",
					color: "#5297FF",
					borderColor: "#2C75D3",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: (theme) => ({
					// clickable card box shadow transition
					position: "relative",
					display: "flex",
					flexDirection: "column",
					minwidth: 0,
					wordWrap: "break-word",
					backgroundColor: "#fff",
					backgroundClip: "border-box",
					border: "0 solid #dbdade",
					borderRadius: "0.938rem",
				}),
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: (ownerState, theme) => {
					return {
						// clickable card box shadow transition
						position: "relative",
						display: "flex",
						flexDirection: "column",
						minwidth: 0,
						wordWrap: "break-word",
						backgroundColor: "#fff",
						backgroundClip: "border-box",
						border: "0 solid #dbdade",
						borderRadius: "0.938rem",
						"@media (max-width: 767.98px)": ownerState.className.includes(
							"card-master"
						) && {
							boxShadow: "none",
							padding: 0,
						},
					};
				},
			},
		},
	},
});
const shadows = [...theme.shadows];
shadows[1] = "6px 0 18px 0 rgba(0, 0, 0, 0.06)";
shadows[2] = "0 0 2rem rgba(0,0,0,.125)";
shadows[3] = "0 .125rem .25rem rgba(165, 163, 174, .3)";
theme = createTheme(theme, {
	shadows,
});

theme = responsiveFontSizes(theme);

export { theme, themeVariables };

export default theme;

// form label #6d6d6d
// #FEC664
// #AFAFAF
// border #D7D7D7
// paper second background #F9F9F9
// table header border #979797
// table row border #C0C0C0
// #686868
// #EEEEEE
// warning action in tables #FFC628
