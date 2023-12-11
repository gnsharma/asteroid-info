import * as React from "react";
import { createTheme, useTheme } from "@mui/material/styles";

export const useMuiDataTables = (defaultExpandedRows: number[] = []) => {
	const theme = useTheme();

	const [expandedRows, setExpandedRows] =
		React.useState<number[]>(defaultExpandedRows);

	const toggleRowExpansion = React.useCallback((rowIndex: number) => {
		setExpandedRows((_expandedRows) => {
			const filteredRows = _expandedRows.filter((a) => a !== rowIndex);
			if (filteredRows.length !== _expandedRows.length) {
				// Clicking on an already expanded row collapses it
				return filteredRows;
			}
			filteredRows.push(rowIndex);
			return filteredRows;
		});
	}, []);

	const isRowExpanded = (rowIndex: number) => expandedRows.includes(rowIndex);

	const options = {
		textLabels: {
			body: {
				noMatch: "No results to review",
			},
			toolbar: {
				downloadCsv: "",
			},
		},
		enableNestedDataAccess: ".",
		elevation: 0,
		filter: true,
		search: false,
		sort: false,
		print: false,
		download: true,
		viewColumns: false,
		responsive: "simple",
		selectToolbarPlacement: "none",
		selectableRows: "none",
		expandableRows: true,
		expandableRowsOnClick: false,
		expandableRowsHeader: false,
		rowsExpanded: expandedRows,
	};

	const headerCellStyles = {
		borderTop: `1px solid #979797`,
		borderBottom: `1px solid #979797`,
		fontSize: "0.9375rem",
		fontWeight: 700,
		letterSpacing: ".01rem",
	};

	const tableTheme = createTheme(theme, {
		components: {
			MUIDataTableToolbar: {
				styleOverrides: {
					titleText: {
						fontSize: "1.625rem",
						fontWeight: 700,
						paddingLeft: "1rem",
					},
				},
			},
			MUIDataTableFilterList: {
				styleOverrides: {
					root: {
						padding: "8px 0",
					},
				},
			},
			MUIDataTableHeadRow: {
				styleOverrides: {
					root: {
						borderTop: `0px solid #D7D7D7`,
						borderBottom: `0px solid #D7D7D7`,
					},
				},
			},
			// For some reason MuiTableCell-root is overriding MUIDataTableHeadCell, so this is a work-around.
			MuiTableCell: {
				styleOverrides: {
					head: {
						...headerCellStyles,
						paddingTop: ".88rem",
						paddingBottom: ".88rem",
					},
				},
			},
			MUIDataTableHeadCell: {
				styleOverrides: {
					toolButton: {
						...headerCellStyles,
						paddingTop: ".88rem",
						paddingBottom: ".88rem",
					},
					sortAction: {
						alignItems: "center",
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						fontSize: "0.9375rem",
						fontWeight: 700,
						letterSpacing: ".01rem",
					},
				},
			},
			MUIDataTableSelectCell: {
				styleOverrides: {
					root: {
						display: "none",
					},
				},
			},
			MUIDataTableBodyCell: {
				styleOverrides: {
					root: {
						overflowWrap: "anywhere",
					},
				},
			},
			// For some reason MuiIconButton-root is overriding MUIDataTableToolbar-icon, so this is a work-around.
			// TODO: find a way to only apply it to one icon
			MuiIconButton: {
				styleOverrides: {
					root: {
						":hover": {
							backgroundColor: "inherit",
						},
					},
				},
			},
		},
	});

	return {
		isRowExpanded,
		toggleRowExpansion,
		commonOptions: options,
		tableTheme,
	};
};
