import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Paragraph } from "../Paragraph";
import { Picture } from "../Picture";

import PerformanceStyle from "./Performance.module.css";

interface PerformanceComponent extends ClassNameComponent {
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
}) => {
	return (
		<article className={classNames(PerformanceStyle.card, className)}>
			<Picture className={PerformanceStyle.picture} src={photo} alt={header} />
			<div className={PerformanceStyle.header}>{Header}</div>
			<Paragraph>{description}</Paragraph>
		</article>
	);
};
