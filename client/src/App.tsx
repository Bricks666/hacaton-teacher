import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { OnlyAuth } from "./components/OnlyAuth";
import { routes } from "./routes";

export const App: FC = () => {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
};
