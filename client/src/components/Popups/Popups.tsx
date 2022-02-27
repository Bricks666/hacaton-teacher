import React, { ComponentType, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { POPUPS } from "../../config";
import { usePopups } from "../../hooks";
import { ChangePerformance } from "../ChangePerformance";
import { CreatePost } from "../CreatePost";
import { EventPopup } from "../EventPopup";
import { UserBlog } from "../UserBlog";
import { UserPerformanceMonitoring } from "../UserPerformanceMonitoring";

const mapPopups: Record<string, ComponentType<{ readonly isOpen: boolean }>> = {
	[POPUPS.post]: CreatePost,
	[POPUPS.userBlog]: UserBlog,
	[POPUPS.userPerformance]: UserPerformanceMonitoring,
	[POPUPS.performance]: ChangePerformance,
	[POPUPS.event]: EventPopup,
};

export const Popups: FC = () => {
	const { mountedPopups, popups } = usePopups();

	useEffect(() => {
		if (mountedPopups.length) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [mountedPopups]);

	return (
		<>
			{mountedPopups.map((mountedPopup) => {
				const Component = mapPopups[mountedPopup];
				if (!Component) {
					return null;
				}

				return (
					<Component
						key={mountedPopup}
						isOpen={popups.includes(mountedPopup)}
					/>
				);
			})}
			<Outlet />
		</>
	);
};
