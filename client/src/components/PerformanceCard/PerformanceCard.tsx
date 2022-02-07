import React, { FC } from "react";
import { ExtractProps } from "../../interfaces/common";
import { CardHeader } from "../../ui/CardHeader";
import { Performance } from "../../ui/Performance";

export const PerformanceCard: FC<ExtractProps<typeof Performance, "Header">> = (
	props
) => {
	return (
		<Performance {...props} Header={<CardHeader header={props.header} />} />
	);
};
