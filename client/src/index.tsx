import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./index.css";
import "./models/init";

const root = document.getElementById("root");
render(
	<StrictMode>
		<App />
	</StrictMode>,
	root
);
