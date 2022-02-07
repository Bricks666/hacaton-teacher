import { forward } from "effector";
import {
	$LoadingUserPerformances,
	$UserPerformances,
	loadUserPerformancesFx,
} from ".";
import { mockServerResponse } from "../../mocks";
import { mockPerformances } from "../../mocks/mockPerformance";

loadUserPerformancesFx.use(
	async () => await mockServerResponse(30000, mockPerformances)
);

forward({
	from: loadUserPerformancesFx.doneData,
	to: $UserPerformances,
});

forward({
	from: loadUserPerformancesFx.pending,
	to: $LoadingUserPerformances,
});
