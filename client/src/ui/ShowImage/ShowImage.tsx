import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Picture } from "../Picture";

import ShowImageStyle from "./ShowImage.module.css";

interface ShowImageComponent extends ClassNameComponent {
	readonly photo: File | string;
	readonly alt: string;
}

export const ShowImage: FC<ShowImageComponent> = ({
	photo,
	alt,
	className,
}) => {
	const url = typeof photo === "string" ? photo : URL.createObjectURL(photo);

	return (
		<object
			className={classNames(ShowImageStyle.object, className)}
			data={url}
			aria-label={alt}
		>
			<Picture className={className} src={url} alt={alt} />
		</object>
	);
};
