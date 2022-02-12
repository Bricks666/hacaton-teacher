import React, { FC } from "react";
import { BookList } from "../../components/BookList";
import { ClassNameProps } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import LibraryPageStyle from "./LibraryPage.module.css";

export const LibraryPage: FC<ClassNameProps> = ({ className }) => {
	return (
		<main className={className}>
			<ContentWrapper className={LibraryPageStyle.wrapper}>
				<SectionHeader label="Library" align="center" />
				<BookList />
			</ContentWrapper>
		</main>
	);
};
