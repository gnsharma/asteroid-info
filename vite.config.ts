import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImportus from "vite-plugin-importus";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		treeShaking: true,
	},
	plugins: [
		react(),
		vitePluginImportus([
			{
				libraryName: "@mui/material",
				camel2DashComponentName: false,
				customName: (formattedName) => {
					if (
						["styled", "createTheme", "ThemeProvider", "useTheme"].includes(
							formattedName
						)
					) {
						return `@mui/material/styles/${formattedName}`;
					}
					return `@mui/material/${formattedName}`;
				},
			},
			{
				libraryName: "@mui/icons-material",
				camel2DashComponentName: false,
				customName: (formattedName) => {
					return `@mui/icons-material/${formattedName}`;
				},
			},
			{
				libraryName: "@mui/lab",
				camel2DashComponentName: false,
				customName: (formattedName) => {
					return `@mui/lab/${formattedName}`;
				},
			},
		]),
		ViteAliases({ prefix: "@" }),
	],
	server: {
		strictPort: true,
		port: 5174, // you can replace this port with any port
	},
});
