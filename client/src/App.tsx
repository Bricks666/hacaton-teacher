import React, { FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { OnlyAuth } from "./components/OnlyAuth";
import { useIsAuthorization } from "./hooks";
import { routes } from "./routes";
import { PageLoading } from "./ui/PageLoading";
import { authFx } from "./models/User";
import { Popups } from "./components/Popups";

import AppStyle from "./App.module.css";

export const App: FC = () => {
	const isLoading = useIsAuthorization();

	useEffect(() => {
		authFx();
	}, []);

	return (
		<BrowserRouter>
			<PageLoading className={AppStyle.loading} isLoading={isLoading}>
				<Routes>
					<Route path="login/*" />
					<Route path="registration/*" />
					<Route path="*" element={<Header />} />
				</Routes>
				<Routes>
					{routes.map(({ path, Component, isOnlyAuth }) => (
						<Route
							path={path}
							element={
								isOnlyAuth ? (
									<OnlyAuth>
										<Component className={AppStyle.main} />
									</OnlyAuth>
								) : (
									<Component className={AppStyle.main} />
								)
							}
							key={path}
						/>
					))}
					<Route path="*" element={<Navigate to="/blog" replace={true} />} />
				</Routes>
				<Popups />
			</PageLoading>
		</BrowserRouter>
	);
};
