import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useIsLogin } from "../../hooks";

interface OnlyAuthComponent {
	readonly to?: string;
}

export const OnlyAuth: FC<OnlyAuthComponent> = ({
	children,
	to = "/login",
}) => {
	const isLogin = useIsLogin();
	const location = useLocation();

	if (!isLogin) {
		return <Navigate to={to} state={location} replace={true} />;
	}
	return <>{children}</>;
};
