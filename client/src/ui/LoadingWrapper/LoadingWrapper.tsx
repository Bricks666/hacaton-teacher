import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import { ClassNameProps } from "../../interfaces/common";

import LoadingWrapperStyle from "./LoadingWrapper.module.css";

interface LoadingWrapperComponent extends ClassNameProps {
	readonly isLoading: boolean;
	readonly LoadingIndicator: ReactNode;
}

export const LoadingWrapper: FC<LoadingWrapperComponent> = ({
	className,
	isLoading,
	LoadingIndicator,

	children,
}) => {
	return isLoading ? (
		<div className={classNames(LoadingWrapperStyle.wrapper, className)}>
			{LoadingIndicator}
		</div>
	) : (
		<>{children}</>
	);
};
