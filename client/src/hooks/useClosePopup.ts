import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useClosePopup = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return useCallback(() => {
		navigate(pathname, { replace: true });
	}, [navigate, pathname]);
};
