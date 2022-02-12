import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { LoadingWrapper } from "../LoadingWrapper";

interface ContentLoadingComponent extends ClassNameProps {
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
