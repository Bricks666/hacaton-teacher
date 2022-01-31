import classNames from "classnames";
import React, { FC, ImgHTMLAttributes } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import PictureStyle from "./Picture.module.css";

interface PictureComponent
	extends ClassNameComponent,
		Partial<ImgHTMLAttributes<HTMLImageElement>> {
	readonly alt: string;
	readonly src: string;
}

export const Picture: FC<PictureComponent> = ({
	className,
	src,
	alt,
	...image
}) => {
	return (
		<img
			className={classNames(PictureStyle.picture, className)}
			src={src}
			alt={alt}
			{...image}
		/>
	);
};
