import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { LoadingWrapper } from "../LoadingWrapper";
import { Logo } from "../Logo";

import PageLoadingStyle from "./PageLoading.module.css";

interface PageLoadingComponent extends ClassNameProps {
	readonly isLoading: boolean;
}

export const PageLoading: FC<PageLoadingComponent> = ({
	className,
	isLoading,
	children,
}) => {
	const [showLogo, setShowLogo] = useState(false);

	useEffect(() => {
		const id = setTimeout(
			() => setShowLogo(!showLogo),
			showLogo ? 15000 : 3000
		);

		return () => {
			clearTimeout(id);
		};
	}, [showLogo]);

	return (
		<LoadingWrapper
			className={className}
			isLoading={isLoading}
			LoadingIndicator={
				<LoadingIndicator className={PageLoadingStyle.indicator}>
					<Logo
						className={classNames(PageLoadingStyle.logo, {
							[PageLoadingStyle.logo__show]: showLogo,
						})}
						type="image and text"
					/>
				</LoadingIndicator>
			}
		>
			{children}
		</LoadingWrapper>
	);
};
