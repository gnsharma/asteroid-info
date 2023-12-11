import * as React from "react";
import {
	useNavigate,
	useLocation,
	Navigate,
	useParams,
} from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";

import {
	Avatar,
	Box,
	Typography,
	Container,
	Paper,
	Hidden,
	useTheme,
	useMediaQuery,
	Unstable_Grid2 as GridV2,
	AppBar as MuiAppBar,
	Toolbar,
	styled,
	AppBarProps,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { LockOutlined } from "@mui/icons-material";
import { useAsteroidInfo, useAsteroidSearch } from "@common/hooks/api";

import { useAuth } from "@/auth";
import { useZodForm, Form, Input } from "@components/forms";

function Info() {
	const { id } = useParams();

	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.only("xs"));
	const { data: info } = useAsteroidInfo({
		variables: { id: id ?? "" },
		enabled: !!id,
	});

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<GridV2 container justifyContent="start" lg={10}>
				<Typography
					gutterBottom
					variant="h3"
					component="h3"
					style={{
						fontFamily: "'Kaisei Decol', serif",
						fontSize: isXs ? "28px" : "56px",
						textAlign: isXs ? "center" : "initial",
						fontWeight: 700,
						marginBottom: "2rem",
						lineHeight: "normal",
					}}
				>
					{info?.name}
					<span
						style={{
							color: "#5297fe",
						}}
					>
						{info?.nasa_jpl_url}
					</span>
				</Typography>
				<GridV2 md={8} lg={8} sx={{ p: 0 }}>
					<Typography
						gutterBottom
						sx={{
							fontWeight: "500",
							color: "#36424a",
							fontFamily: "sans-serif",
						}}
					>
						{info?.is_potentially_hazardous_asteroid
							? "Potentially hazardous"
							: "Safe"}
					</Typography>
				</GridV2>
			</GridV2>
		</Box>
	);
}

function Asteroid() {
	return (
		<>
			<Container maxWidth="xl">
				<GridV2
					container
					spacing={16}
					px={8}
					justifyContent="center"
					alignItems="center"
				>
					<GridV2
						xs={12}
						sm={6}
						md={4}
						justifyContent="center"
						alignItems="center"
					>
						<Info />
					</GridV2>
				</GridV2>
			</Container>
		</>
	);
}

export default Asteroid;
