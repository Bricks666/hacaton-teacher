import classNames from "classnames";
import React, { ComponentType } from "react";
import { AnyObject, ClassNameComponent } from "../../interfaces/common";

import ListStyle from "./List.module.css";

type ListType = "numbered" | "unnumbered";

interface ListComponentProps<T extends AnyObject> extends ClassNameComponent {
	readonly items: T[];
	readonly Card: ComponentType<T>;
	readonly type: ListType;
	readonly indexedBy: keyof T;
	readonly itemClassName?: string;
	readonly count?: number;
}

export const List = <T,>({
	className,
	items,
	type,
	Card,
	indexedBy,
	itemClassName,
	count = items.length,
}: ListComponentProps<T>) => {
	const elements = items.slice(0, count).map((item) => (
		<li className={itemClassName} key={item[indexedBy] as unknown as string}>
			<Card {...item} />
		</li>
	));
	switch (type) {
		case "numbered": {
			return (
				<ol className={classNames(ListStyle.list, className)}>{elements}</ol>
			);
		}
		case "unnumbered": {
			return (
				<ul className={classNames(ListStyle.list, className)}>{elements}</ul>
			);
		}
	}
};
