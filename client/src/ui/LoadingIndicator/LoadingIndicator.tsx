import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import LoadingIndicatorStyle from "./LoadingIndicator.module.css";

export const LoadingIndicator: FC<ClassNameComponent> = ({
	className,
	children,
}) => {
	return (
		<div className={className}>
			<progress className="visibility-hidden" />
			<div
				className={classNames(
					LoadingIndicatorStyle.indicator,
					LoadingIndicatorStyle.indicator__outer
				)}
			>
				<div
					className={classNames(
						LoadingIndicatorStyle.indicator,
						LoadingIndicatorStyle.indicator__inner
					)}
				></div>
			</div>
			{children}
		</div>
	);
};
