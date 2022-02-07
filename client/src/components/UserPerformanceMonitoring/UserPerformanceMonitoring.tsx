import React, { FC } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { useClosePopup, useIsPageOwner, usePrepareLink } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { FullScreenPopup } from "../../ui/FullScreenPopup";
import { UserPerformances } from "../UserPerformances";

import UserPerformanceMonitoringStyle from "./UserPerformanceMonitoring.module.css";

interface UserPerformanceMonitoringComponent extends ClassNameComponent {
	readonly isOpen: boolean;
}

export const UserPerformanceMonitoring: FC<
	UserPerformanceMonitoringComponent
> = ({ isOpen }) => {
	const onClose = useClosePopup();
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
					buttonType="link"
					color="secondary"
					to={createPerformanceLink}
				>
					Add achievement
				</Button>
			)}
			<UserPerformances isPageOwner={isPageOwner} />
		</FullScreenPopup>
	);
};
