import React, { FC } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ClassNameProps } from "../../interfaces/common";

import NavigationItemStyle from "./NavigationItem.module.css";

interface NavigationComponent extends ClassNameProps {
	readonly path: string;
}

export const NavigationItem: FC<NavigationComponent> = ({
	className,
	children,
	path,
}) => {
	return (
		<NavLink
			className={({ isActive }) =>
				classNames(
					NavigationItemStyle.item,
					{ [NavigationItemStyle.item__active]: isActive },
					className
				)
			}
			to={path}
		>
			{children}
		</NavLink>
	);
};
