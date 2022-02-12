import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { Link } from "../Link";

import CardHeaderStyle from "./CardHeader.module.css";

interface CardHeaderComponent extends ClassNameProps {
	readonly link?: string;
	readonly header: string;
}

export const CardHeader: FC<CardHeaderComponent> = ({
	link,
	header,
	children,
	className,
}) => {
	return (
		<header className={classNames(className)}>
			<p className={CardHeaderStyle.paragraph}>
				{link ? (
					<Link className={CardHeaderStyle.link} to={link} type="react">
						{header}
					</Link>
				) : (
					header
				)}
			</p>
			{children}
		</header>
	);
};
