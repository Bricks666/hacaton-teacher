import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { LoadingWrapper } from "../LoadingWrapper";

interface ContentLoadingComponent extends ClassNameComponent {
	readonly isLoading: boolean;
}

export const ContentLoading: FC<ContentLoadingComponent> = ({
	className,
	isLoading,
	children,
}) => {
	return (
		<LoadingWrapper
			className={className}
			isLoading={isLoading}
			LoadingIndicator={<LoadingIndicator />}
		>
			{children}
		</LoadingWrapper>
	);
};
