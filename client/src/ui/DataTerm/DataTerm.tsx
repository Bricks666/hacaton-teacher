import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import DataTermStyle from "./DataTerm.module.css";

export const DataTerm: FC<ClassNameProps> = ({ className, children }) => {
	return (
		<dt className={classNames(DataTermStyle.dataTerm, className)}>
			{children}
		</dt>
	);
};
