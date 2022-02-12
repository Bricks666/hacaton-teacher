import classNames from "classnames";
import React, { FC } from "react";
import { useAuthInfo, useClosePopup } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Avatar } from "../../ui/Avatar";
import { MainPopup } from "../../ui/MainPopup";
import { CreatePostFrom } from "../CreatePostForm";

import CreatePostStyle from "./CreatePost.module.css";

interface CreatePostComponent extends ClassNameProps {
	readonly isOpen: boolean;
}

export const CreatePost: FC<CreatePostComponent> = ({ className, isOpen }) => {
	const { photo, userName } = useAuthInfo();
	const onClose = useClosePopup();

	return (
		<MainPopup
			contentClassName={classNames(CreatePostStyle.section, className)}
			isOpen={isOpen}
			onClose={onClose}
			title="New post"
		>
			<Avatar src={photo} alt={userName} size="large" />
			<CreatePostFrom className={CreatePostStyle.form} />
		</MainPopup>
	);
};
