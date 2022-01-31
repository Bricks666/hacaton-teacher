import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import SectionHeaderStyle from "./SectionHeader.module.css";

export const SectionHeader: FC<ClassNameComponent> = ({
	children,
	className,
}) => {
	return (
		<h2 className={classNames(SectionHeaderStyle.sectionHeader, className)}>
			{children}
		</h2>
	);
};
