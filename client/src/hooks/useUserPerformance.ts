import { useUserPerformances } from "./useUserPerformances";
import { Performance } from "../models/Performance";

export const useUserPerformance = (
	performanceId: number | string | null
): Performance | null => {
	const performances = useUserPerformances();

	return (
		(performanceId &&
			performances.find((performance) => performance.id === +performanceId)) ||
		null
	);
};
