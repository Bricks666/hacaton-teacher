import classNames from "classnames";
import React, { FC } from "react";
import { useUserInfo } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Picture } from "../../ui/Picture";
import { CreatePostFrom } from "../CreatePostForm";

import CreatePostStyle from "./CreatePost.module.css";

export const CreatePost: FC<ClassNameComponent> = ({ className }) => {
	const { photo, userName } = useUserInfo();
	return (
		<section className={classNames(CreatePostStyle.section, className)}>
			<Picture className={CreatePostStyle.photo} src={photo} alt={userName} />
			<CreatePostFrom className={CreatePostStyle.form} />
		</section>
	);
};
