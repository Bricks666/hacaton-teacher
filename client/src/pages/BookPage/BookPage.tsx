import React, { FC } from "react";
import { Book } from "../../components/Book";
import { useGoBack } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { CrossIcon } from "../../ui/CrossIcon";
import { IconButton } from "../../ui/IconButton";
import { SectionHeader } from "../../ui/SectionHeader";

import BookPageStyle from "./BookPage.module.css";

export const BookPage: FC<ClassNameProps> = ({ className }) => {
	const goBack = useGoBack();
	return (
		<main className={className}>
			<ContentWrapper className={BookPageStyle.wrapper}>
				<SectionHeader
					className={BookPageStyle.header}
					label="Library"
					align="center"
				/>
				<IconButton className={BookPageStyle.button} onClick={goBack}>
					<CrossIcon />
				</IconButton>
				<Book />
			</ContentWrapper>
		</main>
	);
};
