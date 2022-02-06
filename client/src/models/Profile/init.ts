import { forward, guard, sample } from "effector";
import {
	$LoadingProfileInfo,
	$ProfileStore,
	changeProfileInfo,
	changeProfileInfoFx,
	loadProfileInfo,
	loadProfileInfoFx,
} from ".";
import { combineProfileInfo } from "../../utils";

guard({
	clock: loadProfileInfo,
	filter: sample({
		source: $LoadingProfileInfo,
		fn: (isLoading) => !isLoading,
	}),
	target: loadProfileInfoFx,
});

forward({
	from: loadProfileInfoFx.doneData,
	to: $ProfileStore,
});

guard({
	clock: changeProfileInfo,
	filter: sample({
		source: changeProfileInfoFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: changeProfileInfoFx,
});

sample({
	source: $ProfileStore,
	clock: changeProfileInfoFx.doneData,
	fn: combineProfileInfo,
	target: $ProfileStore,
});
