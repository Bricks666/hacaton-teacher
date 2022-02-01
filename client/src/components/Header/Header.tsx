import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { Logo } from "../../ui/Logo";
import { Navigation } from "../Navigation";
import { ProfileLink } from "../ProfileLink";

import HeaderStyle from "./Header.module.css";

export const Header: FC<ClassNameComponent> = ({ className, children }) => {
	return (
		<header className={classNames(className)}>
			<ContentWrapper className={HeaderStyle.header}>
				<Logo className={HeaderStyle.logo} type="text" />
				<Navigation className={HeaderStyle.navigation} />
				{children}
				<ProfileLink className={HeaderStyle.profileLink} />
			</ContentWrapper>
		</header>
	);
};
