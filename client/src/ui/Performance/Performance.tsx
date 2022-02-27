import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { Paragraph } from "../Paragraph";
import { Picture } from "../Picture";

import PerformanceStyle from "./Performance.module.css";

interface PerformanceComponent extends ClassNameProps {
	readonly id: number;
	readonly header: string;
	readonly photo: string;
	readonly description: string;
	readonly Header: ReactNode;
}

export const Performance: FC<PerformanceComponent> = ({
	className,
	Header,
	description,
	header,
	photo,
	children,
}) => {
	return (
		<article className={classNames(PerformanceStyle.card, className)}>
			<Picture className={PerformanceStyle.picture} src={photo} alt={header} />
			<div className={PerformanceStyle.header}>{Header}</div>
			<Paragraph className={PerformanceStyle.content}>{description}</Paragraph>
			{children}
		</article>
	);
};
