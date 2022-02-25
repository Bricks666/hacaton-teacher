import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import BlockWrapperStyle from "./BlockWrapper.module.css";

export const BlockWrapper: FC<ClassNameProps> = ({
	className,
	children,
}) => {
	return (
		<div className={classNames(BlockWrapperStyle.wrapper, className)}>
			{children}
		</div>
	);
};
