import classNames from "classnames";
import React, { FC } from "react";
import { Link as ReactLink } from "react-router-dom";
import { ClassNameComponent } from "../../interfaces/common";

import LinkStyle from "./Link.module.css";

type LinkType = "regular" | "react";

interface LinkComponent extends ClassNameComponent {
	readonly state?: unknown;
	readonly to: string;
	readonly type: LinkType;
}

export const Link: FC<LinkComponent> = ({
	to,
	type,
	className,
	children,
	...reactLink
}) => {
	const classes = classNames(LinkStyle.link, className);
	if (type === "regular") {
		return (
			<a className={classes} href={to}>
				{children}
			</a>
		);
	}

	return (
		<ReactLink className={classes} to={to} {...reactLink}>
			{children}
		</ReactLink>
	);
};
