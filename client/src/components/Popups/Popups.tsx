import React, { ComponentType, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { POPUPS } from "../../config";
import { usePopups } from "../../hooks";
import { CreatePost } from "../CreatePost";
import { UserBlog } from "../UserBlog";
import { UserPerformanceMonitoring } from "../UserPerformanceMonitoring";

const mapPopups: Record<string, ComponentType<{ readonly isOpen: boolean }>> = {
	[POPUPS.post]: CreatePost,
	[POPUPS.userBlog]: UserBlog,
	[POPUPS.userPerformance]: UserPerformanceMonitoring,
};

export const Popups: FC = () => {
	const { mountedPopups } = usePopups();

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

				return <Component key={mountedPopup} isOpen={true} />;
			})}
			<Outlet />
		</>
	);
};
