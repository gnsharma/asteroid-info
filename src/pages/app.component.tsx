import * as React from "react";
import {
	Typography,
	Link as MuiLink,
	Box,
	useTheme,
	useMediaQuery,
} from "@mui/material";

import {
	useNavigate,
	useLocation,
	Navigate,
	useParams,
} from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";

import {
	Avatar,
	Container,
	Paper,
	Unstable_Grid2 as GridV2,
	AppBar as MuiAppBar,
	Toolbar,
	styled,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { SearchOutlined } from "@mui/icons-material";

import { useZodForm, Form, Input } from "@components/forms";
import { useAsteroidInfo, useAsteroidSearch } from "@common/hooks/api";
//

const loginFormschema = z.object({
	id: z.string({
		required_error: "Please enter valid id",
	}),
});

export type LoginFormValues = z.infer<typeof loginFormschema>;

const LoginForm = () => {
	const navigate = useNavigate();
	const form = useZodForm({
		schema: loginFormschema,
	});

	const { data: info } = useAsteroidInfo({
		enabled: Boolean(form.getValues("id")),
	});

	const { data: list } = useAsteroidSearch();

	const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
		navigate(data.id);
	};

	const onRandomClick = () => {
		const asteroids = list?.near_earth_objects ?? [];
		const total = asteroids.length;
		const index = Math.floor(Math.random() * total);
		console.log("index", index);
		console.log("abc", asteroids[index].id, index);
		navigate(asteroids[index].id);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper sx={{ p: 12, mt: 16 }} elevation={1}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 4, bgcolor: "secondary.main" }}>
						<SearchOutlined />
					</Avatar>
					<Typography component="h1" variant="h5">
						NASA Asteriod Info Portal
					</Typography>
					<Box sx={{ mt: 4 }}>
						<Form form={form} onSubmit={onSubmit}>
							<Input
								type="text"
								// label="Email Address"
								fullWidth
								autoFocus
								required
								margin="normal"
								placeholder="Enter Asteroid ID."
								{...form.register("id")}
							/>
							<LoadingButton
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 12, mb: 8 }}
								loading={form.formState.isSubmitting}
							>
								Submit
							</LoadingButton>
							<LoadingButton
								// type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 12, mb: 8 }}
								// loading={form.formState.isSubmitting}
								onClick={onRandomClick}
							>
								Random Asteroid
							</LoadingButton>
						</Form>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

const App = () => {
	const theme = useTheme();
	const isNotBigScreen = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Box
			pl={0}
			pr={0}
			display="flex"
			height="inherit"
			width="inherit"
			flexWrap={isNotBigScreen ? "wrap" : "nowrap"}
			pt={isNotBigScreen ? 39 : 0}
		>
			{/* <NavBar /> */}
			<main
				style={{
					flexGrow: 1,
					padding: "24px",
					maxWidth: "100vw",
				}}
			>
				<LoginForm />
			</main>
		</Box>
	);
};

export default App;
