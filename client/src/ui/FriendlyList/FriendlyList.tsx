import React, { ComponentType } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentLoading } from "../ContentLoading";
import { List } from "../List";
import { Paragraph } from "../Paragraph";

type ListType = Parameters<typeof List>[0]["type"];

type FriendlyListProps<T> = ClassNameComponent &
	Parameters<typeof ContentLoading>[0] & {
		readonly emptyLabel?: string;
		readonly items: T[];
		readonly Card: ComponentType<T>;
		readonly indexedBy: keyof T;
		readonly type: ListType;
		readonly count?: number;
		readonly itemClassName?: string;
		readonly loadingClassName?: string;
	};

export const FriendlyList = <T,>({
	Card,
	indexedBy,
	isLoading,
	items,
	type,
	emptyLabel,
	itemClassName,
	className,
	count,
	loadingClassName,
}: FriendlyListProps<T>) => {
	return (
		<ContentLoading className={loadingClassName} isLoading={isLoading}>
			{items.length ? (
				<List<T>
					className={className}
					Card={Card}
					indexedBy={indexedBy}
					items={items}
					type={type}
					itemClassName={itemClassName}
					count={count}
				/>
			) : (
				<Paragraph className={className}>{emptyLabel}</Paragraph>
			)}
		</ContentLoading>
	);
};
