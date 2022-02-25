import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import SvgIconStyle from "./SvgIcon.module.css";

type Size = "small" | "medium" | "large";

interface SvgIconProps extends ClassNameProps {
	readonly size?: Size;
}

const viewBoxes: Record<Size, string> = {
	large: "0 0 30 30",
	medium: "0 0 25 25",
	small: "0 0 20 20",
};

export const SvgIcon: FC<SvgIconProps> = ({
	children,
	className,
	size = "medium",
}) => {
	const viewBox = viewBoxes[size];
	const classes = classNames(
		SvgIconStyle.icon,
		SvgIconStyle[`icon--${size}`],
		className
	);
	return (
		<svg
			className={classes}
			viewBox={viewBox}
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</svg>
	);
};
