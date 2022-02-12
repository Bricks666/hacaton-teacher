import classNames from "classnames";
import React, { FC, ImgHTMLAttributes, memo } from "react";
import { ClassNameProps } from "../../interfaces/common";

import PictureStyle from "./Picture.module.css";

interface PictureComponent
	extends ClassNameProps,
		Readonly<Partial<ImgHTMLAttributes<HTMLImageElement>>> {
	readonly alt: string;
	readonly src: string;
}

export const Picture: FC<PictureComponent> = memo(
	({ className, src, alt, ...image }) => {
		return (
			<img
				className={classNames(PictureStyle.picture, className)}
				src={src}
				alt={alt}
				{...image}
			/>
		);
	}
);
