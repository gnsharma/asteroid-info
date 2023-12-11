import * as React from "react";

import spriteFile from "@/sprite.svg";

interface SvgIconProps {
	icon: string;
	size?: number;
	style?: React.CSSProperties;
}

export const SvgIcon = ({ icon, size, style }: SvgIconProps) => {
	// Define the CSS styles for the icon
	const iconStyles = {
		width: `${size || 24}px`,
		height: `${size || 24}px`,
		...style,
	};

	return (
		<svg
			style={{
				display: "inline-block",
				lineHeight: 0,
				flexShrink: 0,
				...iconStyles,
			}}
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox={`0 0 ${size || 24} ${size || 24}`}
		>
			<use xlinkHref={`${spriteFile}#${icon}`} />
		</svg>
	);
};
