import React, { FC } from "react";
import classNames from "classnames";
import { ClassNameComponent } from "../../interfaces/common";

import DataDescriptionStyle from "./DataDescription.module.css";

export const DataDescription: FC<ClassNameComponent> = ({
	className,
	children,
}) => {
	return (
		<dd className={classNames(DataDescriptionStyle.dataDescription, className)}>
			{children}
		</dd>
	);
};
