import React, { FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { OnlyAuth } from "./components/OnlyAuth";
import { useIsAuthorization } from "./hooks";
import { routes } from "./routes";
import { PageLoading } from "./ui/PageLoading";
import { auth } from "./models/Auth";
import { Popups } from "./components/Popups";

import AppStyle from "./App.module.css";

export const App: FC = () => {
	const isLoading = useIsAuthorization();

	useEffect(() => {
		auth();
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
					<Route path="/" element={<Popups />}>
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
						<Route path="/" element={<Navigate to="/blog" replace={true} />} />
					</Route>
				</Routes>
			</PageLoading>
		</BrowserRouter>
	);
};
