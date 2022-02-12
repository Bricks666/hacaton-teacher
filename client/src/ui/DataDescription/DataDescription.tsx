import React, { FC } from "react";
import classNames from "classnames";
import { ClassNameProps } from "../../interfaces/common";

import DataDescriptionStyle from "./DataDescription.module.css";

export const DataDescription: FC<ClassNameProps> = ({
	className,
	children,
}) => {
	return (
		<dd className={classNames(DataDescriptionStyle.dataDescription, className)}>
			{children}
		</dd>
	);
};
