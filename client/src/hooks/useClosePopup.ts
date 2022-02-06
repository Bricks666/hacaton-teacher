import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useClosePopup = () => {
	const navigate = useNavigate();

	return useCallback(() => {
		navigate(-1);
	}, [navigate]);
};
