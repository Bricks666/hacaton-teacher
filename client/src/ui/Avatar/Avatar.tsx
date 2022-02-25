import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { Picture } from "../Picture";

import AvatarStyle from "./Avatar.module.css";

interface AvatarComponent extends ClassNameProps {
	readonly src: string;
	readonly alt: string;
	readonly size?: "small" | "medium" | "large";
}

const extractAvatarAlt = (alt: string) => alt[0]?.toUpperCase();

export const Avatar: FC<AvatarComponent> = ({
	alt,
	src,
	className,
	size = "medium",
}) => {
	const classes = classNames(
		AvatarStyle.avatar,
		AvatarStyle[`avatar--${size}`],
		className
	);
	return <Picture className={classes} src={src} alt={extractAvatarAlt(alt)} />;
};
