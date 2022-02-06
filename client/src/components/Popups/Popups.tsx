import React, { ComponentType, FC } from "react";
import { POPUPS } from "../../config";
import { usePopups } from "../../hooks";
import { CreatePost } from "../CreatePost";
import { UserBlog } from "../UserBlog";

const mapPopups: Record<
	keyof typeof POPUPS,
	ComponentType<{ readonly isOpen: boolean }>
> = {
	post: CreatePost,
	userBlog: UserBlog,
};

export const Popups: FC = () => {
	const { mountedPopups } = usePopups();
	return (
		<>
			{mountedPopups.map((mountedPopup) => {
				const Component = mapPopups[mountedPopup as keyof typeof POPUPS];

				if (!Component) {
					return null;
				}

				return <Component key={mountedPopup} isOpen={true} />;
			})}
		</>
	);
};
