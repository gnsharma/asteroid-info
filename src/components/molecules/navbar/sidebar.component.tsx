import * as React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { Drawer, Box, List, ListItem, Typography } from "@mui/material";

import { useAuth } from "@/auth";
import { SvgIcon } from "@components/ui";
import { PAGES } from "@common/constants";

import ConfidentlyLogo from "@assets/logo/confidently.svg";

const DRAWER_WIDTH = 260;
const DRAWER_LIST_ITEMS: any[] = [];

interface SidebarProps {
	isOpen?: boolean;
	toggleOpen?: () => void;
	container?: HTMLElement | null;
}
function Sidebar({ isOpen, toggleOpen, container }: SidebarProps) {
	const theme = useTheme();
	const auth = useAuth();
	const navigate = useNavigate();

	const drawer = (
		<Box display="flex" flexDirection="column">
			<Box
				py={4}
				display="flex"
				alignItems="center"
				flexGrow={0}
				flexShrink={0}
				lineHeight={1}
				overflow="hidden"
				height="64px"
				m={"0 0.875rem 0 1rem"}
			>
				<Link to="/">{/* <img src={ConfidentlyLogo} /> */}</Link>
			</Box>
			{auth.user ? (
				<List sx={{ py: 2 }} component="nav">
					{DRAWER_LIST_ITEMS.map((item, index) => (
						<ListItem
							key={`${item.path}-${index}`}
							onClick={() => {
								if (item.path === "") auth.signout(() => navigate("/"));
								toggleOpen?.();
							}}
						>
							<NavLink
								to={`/${item.path}`}
								style={{
									paddingLeft: "1rem",
									fontSize: "1rem",
								}}
								className={({ isActive }) => (isActive ? "is-active" : "")}
							>
								<Box display="flex" alignItems="center" gap={4}>
									<SvgIcon icon={item.icon} />
									<Typography color="primary" sx={{ fontSize: "15px" }}>
										{item.text}
									</Typography>
								</Box>
							</NavLink>
						</ListItem>
					))}
				</List>
			) : null}
		</Box>
	);

	if (isOpen === false) return null;

	/* backdrop should have cursor pointer */
	return (
		<Box component="nav" sx={{ width: DRAWER_WIDTH, flexShrink: 0 }}>
			<Drawer
				sx={{
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: DRAWER_WIDTH,
						border: "none",
						boxShadow: theme.shadows[1],
						borderRadius: 0,
					},
				}}
				variant={isOpen === undefined ? "permanent" : "temporary"}
				open={isOpen ?? true}
				onClose={toggleOpen}
				hideBackdrop={isOpen === undefined}
				ModalProps={{
					sx: { zIndex: 1700 },
				}}
				container={container}
			>
				{drawer}
			</Drawer>
		</Box>
	);
}

export default Sidebar;
