import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import BlockWrapperStyle from "./BlockWrapper.module.css";

export const BlockWrapper: FC<ClassNameComponent> = ({
	className,
	children,
}) => {
	return (
		<div className={classNames(BlockWrapperStyle.wrapper, className)}>
			{children}
		</div>
	);
};
