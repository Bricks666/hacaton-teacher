import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { OnlyAuth } from "./components/OnlyAuth";
import { useIsAuthorization } from "./hooks";
import { routes } from "./routes";
import { LoadingWrapper } from "./ui/LoadingWrapper";
import { authFx } from "./models/User";

import AppStyle from "./App.module.css";

export const App: FC = () => {
	const isLoading = useIsAuthorization();

	useEffect(() => {
		authFx();
	}, []);

	return (
		<BrowserRouter>
			<LoadingWrapper className={AppStyle.loading} isLoading={isLoading}>
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
										<Component />
									</OnlyAuth>
								) : (
									<Component />
								)
							}
							key={path}
						/>
					))}
				</Routes>
			</LoadingWrapper>
		</BrowserRouter>
	);
};
