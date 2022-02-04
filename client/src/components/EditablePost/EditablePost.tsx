import React, { FC } from "react";
import { Post } from "../../ui/Post";
import { PostHeaderWithEditing } from "../PostHeaderWithEditing";

export const EditablePost: FC<Omit<Parameters<typeof Post>[0], "Header">> = (
	props
) => {
	return <Post {...props} Header={PostHeaderWithEditing} />;
};
