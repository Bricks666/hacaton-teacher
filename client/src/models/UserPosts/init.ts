import { forward } from "effector";
import { $LoadingUserPosts, $UserPosts, loadUserPostsFx } from ".";
import { mockServerResponse, mockUserPosts } from "../../mocks";

forward({
	from: loadUserPostsFx.doneData,
	to: $UserPosts,
});
loadUserPostsFx.use(async () => await mockServerResponse(3000, mockUserPosts));

forward({
	from: loadUserPostsFx.pending,
	to: $LoadingUserPosts,
});
