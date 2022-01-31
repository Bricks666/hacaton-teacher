import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

export const SubsectionHeader: FC<ClassNameComponent> = ({
	className,
	children,
}) => {
	return (
		<h3
			className={classNames(SubsectionHeaderStyle.SubsectionHeader, className)}
		>
			{children}
		</h3>
	);
};
