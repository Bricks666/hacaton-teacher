import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route path={path} element={<Component />} key={path} />
				))}
			</Routes>
		</BrowserRouter>
	);
};
