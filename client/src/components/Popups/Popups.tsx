import React, { ComponentType, FC } from "react";
import { usePopups } from "../../hooks";
import { CreatePost } from "../CreatePost";

const mapPopups: Record<string, ComponentType<{ readonly isOpen: boolean }>> = {
	post: CreatePost,
};

export const Popups: FC = () => {
	const { mountedPopups } = usePopups();
	return (
		<>
			{mountedPopups.map((mountedPopup) => {
				const Component = mapPopups[mountedPopup];

				if (!Component) {
					return null;
				}

				return <Component key={mountedPopup} isOpen={true} />;
			})}
		</>
	);
};
