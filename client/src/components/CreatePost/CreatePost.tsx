import classNames from "classnames";
import React, { FC } from "react";
import { useClosePopup, useUserInfo } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { MainPopup } from "../../ui/MainPopup";
import { Picture } from "../../ui/Picture";
import { CreatePostFrom } from "../CreatePostForm";

import CreatePostStyle from "./CreatePost.module.css";

interface CreatePostComponent extends ClassNameComponent {
	readonly isOpen: boolean;
}

export const CreatePost: FC<CreatePostComponent> = ({ className, isOpen }) => {
	const { photo, userName } = useUserInfo();
	const onClose = useClosePopup();
	return (
		<MainPopup
			contentClassName={classNames(CreatePostStyle.section, className)}
			isOpen={isOpen}
			onClose={onClose}
			title="New post"
		>
			<Picture
				className={CreatePostStyle.photo}
				src={photo}
				alt={userName}
				title={userName}
			/>
			<CreatePostFrom className={CreatePostStyle.form} />
		</MainPopup>
	);
};
