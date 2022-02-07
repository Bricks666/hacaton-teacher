import React, { FC } from "react";
import { useLoadingUserPerformances, useUserPerformances } from "../../hooks";
import { FriendlyList } from "../../ui/FriendlyList";
import { PerformanceShort } from "../../ui/PerformanceShort";

import LastUserPerformanceStyle from "./LastUserPerformance.module.css";

export const LastUserPerformance: FC = () => {
	const performances = useUserPerformances();
	const isLoading = useLoadingUserPerformances();

	return (
		<FriendlyList
			className={LastUserPerformanceStyle.list}
			items={performances}
			isLoading={isLoading}
			type="unnumbered"
			emptyLabel="You haven't had any performance yet"
			count={2}
			indexedBy="id"
			Card={PerformanceShort}
			itemClassName={LastUserPerformanceStyle.image}
		/>
	);
};
