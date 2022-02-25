import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import ContentWrapperStyle from "./ContentWrapper.module.css";

export const ContentWrapper: FC<ClassNameProps> = ({
	className,
	children,
}) => {
	return (
		<div className={classNames(ContentWrapperStyle.wrapper, className)}>
			{children}
		</div>
	);
};
