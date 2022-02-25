import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import DatalistStyle from "./Datalist.module.css";

export const Datalist: FC<ClassNameProps> = ({ className, children }) => {
	return (
		<dl className={classNames(DatalistStyle.datalist, className)}>
			{children}
		</dl>
	);
};
