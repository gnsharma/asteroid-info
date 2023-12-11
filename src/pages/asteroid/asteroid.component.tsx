import * as React from "react";
import { useParams } from "react-router-dom";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useAsteroidInfo } from "@common/hooks/api";

function Asteroid() {
	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.only("xs"));

	const { id } = useParams();
	const { data: info } = useAsteroidInfo(id ?? "");

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			px={12}
			pt={12}
		>
			<Typography
				gutterBottom
				variant="h3"
				component="h3"
				style={{
					fontSize: isXs ? "28px" : "56px",
					fontWeight: 700,
					marginBottom: "2rem",
					lineHeight: "normal",
				}}
			>
				{info?.name}
			</Typography>
			<Typography
				gutterBottom
				variant="h3"
				component="a"
				style={{
					fontSize: "28px",
					fontWeight: 500,
					marginBottom: "2rem",
					lineHeight: "normal",
				}}
				href={info?.nasa_jpl_url}
			>
				{info?.nasa_jpl_url}
			</Typography>
			<Typography
				gutterBottom
				sx={{
					fontSize: "28px",
					fontWeight: 700,
					color: "#36424a",
					fontFamily: "sans-serif",
				}}
			>
				{info?.is_potentially_hazardous_asteroid
					? "Potentially hazardous"
					: "Safe from collision"}
			</Typography>
		</Box>
	);
}

export default Asteroid;
