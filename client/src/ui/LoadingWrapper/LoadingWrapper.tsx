import React, { FC } from "react";
import classNames from "classnames";
import { ClassNameComponent } from "../../interfaces/common";

import LoadingWrapperStyle from "./LoadingWrapper.module.css";

interface LoadingWrapperComponent extends ClassNameComponent {
	readonly isLoading: boolean;
}

export const LoadingWrapper: FC<LoadingWrapperComponent> = ({
	className,
	isLoading,
	children,
}) => {
	return isLoading ? (
		<div className={classNames(LoadingWrapperStyle.wrapper, className)}>
			<progress className="visibility-hidden" />
			<div
				className={classNames(
					LoadingWrapperStyle.indicator,
					LoadingWrapperStyle.indicator__outer
				)}
			>
				<div
					className={classNames(
						LoadingWrapperStyle.indicator,
						LoadingWrapperStyle.indicator__inner
					)}
				></div>
			</div>
		</div>
	) : (
		<>{children}</>
	);
};
