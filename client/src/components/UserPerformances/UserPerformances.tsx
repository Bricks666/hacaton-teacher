import classNames from "classnames";
import React, { FC } from "react";
import { useLoadingUserPerformances, useUserPerformances } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { FriendlyList } from "../../ui/FriendlyList";
import { EditablePerformance } from "../EditablePerformance";
import { PerformanceCard } from "../PerformanceCard";

import UserPerformancesStyle from "./UserPerformances.module.css";

interface UserPerformancesComponent extends ClassNameProps {
	readonly isPageOwner: boolean;
}

export const UserPerformances: FC<UserPerformancesComponent> = ({
	isPageOwner,
	className,
}) => {
	const isLoading = useLoadingUserPerformances();
	const performances = useUserPerformances();

	return (
		<FriendlyList
			className={classNames(UserPerformancesStyle.list, className)}
			loadingClassName={UserPerformancesStyle.loading}
			items={performances}
			isLoading={isLoading}
			Card={isPageOwner ? EditablePerformance : PerformanceCard}
			indexedBy="id"
			type="unnumbered"
			emptyLabel="You haven't had any performance yet"
		/>
	);
};
