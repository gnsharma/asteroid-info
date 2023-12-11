import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	IconButton,
	Button,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Logout as LogoutIcon } from "@mui/icons-material";

import { useAuth } from "@/auth";
import { useOnClickOutside } from "@common/hooks/generic";

import Sidebar from "./sidebar.component";

const TopBar = () => {
	const ref = React.useRef(null);
	const theme = useTheme();
	const auth = useAuth();
	const navigate = useNavigate();
	const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

	const toggleSidebar = React.useCallback(() => {
		setIsSidebarOpen((open) => !open);
	}, []);

	const closeSidebar = React.useCallback((event: any) => {
		setIsSidebarOpen(false);
	}, []);

	useOnClickOutside(ref, closeSidebar);

	return (
		<>
			<Box
				component="header"
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				px={8}
				sx={{
					width: "calc(100% - 48px)",
					mx: 12,
					mt: 8,
					height: "62px",
					borderRadius: 4,
					backgroundColor: (theme) => theme.palette.background.paper,
					position: "fixed",
					top: 0,
					boxShadow: "0 6px 18px 0 rgba(0,0,0,.14)",
					zIndex: 1200,
				}}
			>
				<IconButton color="inherit" onClick={toggleSidebar}>
					<MenuIcon color={theme.palette.text.secondary} />
				</IconButton>
				{auth.user ? (
					isMobileView ? (
						<IconButton
							color="primary"
							aria-label="sign out"
							edge="start"
							onClick={() => {
								auth.signout(() => navigate("/"));
							}}
						>
							<LogoutIcon />
						</IconButton>
					) : (
						<Box
							display="flex"
							justifyContent="flex-end"
							gap={4}
							alignItems="center"
							color={
								theme.palette.mode === "light"
									? theme.palette.common.black
									: theme.palette.common.white
							}
						>
							{auth.user.email}
							<Button
								variant="outlined"
								onClick={() => {
									auth.signout(() => navigate("/"));
								}}
							>
								Sign out
							</Button>
						</Box>
					)
				) : null}
			</Box>
			<Box ref={ref} id="abc">
				<Sidebar
					isOpen={isSidebarOpen}
					toggleOpen={toggleSidebar}
					container={ref.current}
				/>
			</Box>
		</>
	);
};

const ResponsiveNavigation = () => {
	const theme = useTheme();
	const isNotBigScreen = useMediaQuery(theme.breakpoints.down("lg"));

	return isNotBigScreen ? <TopBar /> : <Sidebar />;
};

export default ResponsiveNavigation;
