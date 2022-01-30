import React, { FC } from "react";
import classNames from "classnames";
import { ClassNameComponent } from "../../interfaces/common";
import image from "./image.svg";
import imageAndText from "./image-and-text.svg";
import text from "./text.svg";

import LogoStyle from "./Logo.module.css";

type LogoType = "text" | "image and text" | "image";

interface LogoComponent extends ClassNameComponent {
	readonly type: LogoType;
	readonly logoClassName?: string;
	readonly captionClassName?: string;
}

const logoImageMap: Readonly<Record<LogoType, string>> = {
	text: text,
	"image and text": imageAndText,
	image: image,
};

export const Logo: FC<LogoComponent> = ({
	className,
	type,
	children,
	logoClassName,
	captionClassName,
}) => {
	return (
		<figure className={classNames(LogoStyle.figure, className)}>
			<img
				className={classNames(LogoStyle.logo, logoClassName)}
				src={logoImageMap[type]}
				alt="Tabula"
			/>
			<figcaption className={classNames(LogoStyle.caption, captionClassName)}>
				{children}
			</figcaption>
		</figure>
	);
};
