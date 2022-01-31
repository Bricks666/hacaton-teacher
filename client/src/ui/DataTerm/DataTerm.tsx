import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import DataTermStyle from "./DataTerm.module.css";

export const DataTerm: FC<ClassNameComponent> = ({ className, children }) => {
	return (
		<dt className={classNames(DataTermStyle.dataTerm, className)}>
			{children}
		</dt>
	);
};
