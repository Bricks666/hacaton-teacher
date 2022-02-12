import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { ClassNameProps } from "../../interfaces/common";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

interface SubsectionProps extends ClassNameProps {
	readonly label: string | ReactNode;
	readonly align?: "start" | "center" | "end";
}

export const SubsectionHeader: FC<SubsectionProps> = ({
	className,
	label,
	align = "start",
}) => {
	const style = { textAlign: align };
	return (
		<h3
			className={classNames(SubsectionHeaderStyle.subsectionHeader, className)}
			style={style}
		>
			{label}
		</h3>
	);
};
