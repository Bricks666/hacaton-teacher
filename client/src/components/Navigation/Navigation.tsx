import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { List } from "../../ui/List";
import { NavigationItem } from "../../ui/NavigationItem";

import NavigationStyle from "./Navigation.module.css";

interface NavItem {
	readonly path: string;
	readonly children: string;
}

const navigation: NavItem[] = [
	{
		path: "/blog",
		children: "Blog",
	},
	{
		path: "/performance",
		children: "Performance monitoring",
	},
	{
		path: "/library",
		children: "Library",
	},
	{
		path: "/events",
		children: "School events",
	},
];

export const Navigation: FC<ClassNameComponent> = ({ className }) => {
	return (
		<nav className={classNames(NavigationStyle.nav, className)}>
			<List
				className={NavigationStyle.list}
				items={navigation}
				Card={NavigationItem}
				indexedBy={"path"}
				type="unnumbered"
			/>
		</nav>
	);
};
