import { useStore } from "effector-react";
import { useEffect } from "react";
import {
	$UserPerformances,
	loadUserPerformancesFx,
} from "../models/Performance";

export const useUserPerformances = () => {
	const performances = useStore($UserPerformances);

	useEffect(() => {
		if (!performances.length) {
			loadUserPerformancesFx();
		}
	}, [performances.length]);

	return performances;
};
