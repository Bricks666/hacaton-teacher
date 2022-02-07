import classNames from "classnames";
import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useIsLogin } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { Logo } from "../../ui/Logo";
import { Navigation } from "../Navigation";
import { ProfileLink } from "../ProfileLink";
import { Search } from "../Search";

import HeaderStyle from "./Header.module.css";

export const Header: FC<ClassNameComponent> = ({ className }) => {
	const isLogin = useIsLogin();
	const [isSmallLink, setIsSmallLink] = useState(false);
	const onSearch = (value: unknown) => console.log(value);

	return (
		<header className={classNames(className)}>
			<ContentWrapper className={HeaderStyle.header}>
				<Logo className={HeaderStyle.logo} type="text" />
				<Navigation className={HeaderStyle.navigation} />
				<Routes>
					<Route
						path="/blog/*"
						element={
							<Search
								className={classNames(HeaderStyle.search, {
									[HeaderStyle.search__show]: isSmallLink,
								})}
								onSearch={onSearch}
								onShowChange={setIsSmallLink}
								isShow={isSmallLink}
							/>
						}
					/>
				</Routes>
				{isLogin ? (
					<ProfileLink className={HeaderStyle.profileLink} />
				) : (
					<Button
						className={HeaderStyle.profileLink}
						buttonType="link"
						color="monotype"
						type="listed"
						to="/login"
					>
						Login
					</Button>
				)}
			</ContentWrapper>
		</header>
	);
};
