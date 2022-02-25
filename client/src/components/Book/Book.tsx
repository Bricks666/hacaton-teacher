import classNames from "classnames";
import React, { FC } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useBook } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { DataDescription } from "../../ui/DataDescription";
import { Datalist } from "../../ui/Datalist";
import { DataTerm } from "../../ui/DataTerm";
import { Picture } from "../../ui/Picture";
import { SubsectionHeader } from "../../ui/SubsectionHeader";

import BookStyle from "./Book.module.css";

/* TODO: Разгрузить компонент */

export const Book: FC<ClassNameProps> = ({ className }) => {
	const { id } = useParams();
	const book = useBook(id);

	/* Придумать что то с моментом, когда нет книги */
	if (!book) {
		return <Navigate to={"/library"} replace={true} />;
	}

	const { authorName, description, link, name, photo = "" } = book;

	return (
		<section className={classNames(BookStyle.book, className)}>
			<SubsectionHeader className={BookStyle.header} label={name} />
			<Picture className={BookStyle.photo} src={photo} alt={name} />
			<Datalist className={BookStyle.dataList}>
				<div className={BookStyle.pair}>
					<DataTerm className={BookStyle.dataTerm}>Author:</DataTerm>
					<DataDescription className={BookStyle.dataDescription}>
						{authorName}
					</DataDescription>
				</div>
				<div className={BookStyle.pair}>
					<DataTerm className={BookStyle.dataTerm}>Genre:</DataTerm>
					<DataDescription className={BookStyle.dataDescription}>
						{name}
					</DataDescription>
				</div>
				<div>
					<DataTerm className={BookStyle.dataTerm}>Description:</DataTerm>
					<DataDescription className={BookStyle.dataDescription}>
						{description}
					</DataDescription>
				</div>
			</Datalist>
			<Button className={BookStyle.button} to={link}>
				Read book
			</Button>
		</section>
	);
};
