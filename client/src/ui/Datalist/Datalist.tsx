import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import DatalistStyle from "./Datalist.module.css";

export const Datalist: FC<ClassNameComponent> = ({ className, children }) => {
	return (
		<dl className={classNames(DatalistStyle.datalist, className)}>
			{children}
		</dl>
	);
};
