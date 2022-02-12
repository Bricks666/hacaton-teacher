import React, { FC } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { useGoBack, useIsPageOwner, usePrepareLink } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { FullScreenPopup } from "../../ui/FullScreenPopup";
import { UserPerformances } from "../UserPerformances";

import UserPerformanceMonitoringStyle from "./UserPerformanceMonitoring.module.css";

interface UserPerformanceMonitoringComponent extends ClassNameProps {
	readonly isOpen: boolean;
}

export const UserPerformanceMonitoring: FC<
	UserPerformanceMonitoringComponent
> = ({ isOpen }) => {
	const onClose = useGoBack();
	const isPageOwner = useIsPageOwner();

	const createPerformanceLink = usePrepareLink({
		addQueryParam: {
			[GET_PARAMS.popups]: POPUPS.performance,
		},
	});

	return (
		<FullScreenPopup
			className={UserPerformanceMonitoringStyle.content}
			isOpen={isOpen}
			onClose={onClose}
			label="Performance"
		>
			{isPageOwner && (
				<Button
					className={UserPerformanceMonitoringStyle.button}
					color="secondary"
					type="rounded"
					to={createPerformanceLink}
				>
					Add achievement
				</Button>
			)}
			<UserPerformances isPageOwner={isPageOwner} />
		</FullScreenPopup>
	);
};
