import Root from "Core/root";
import i18n from "I18n/i18n.config";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

ReactDOM.render(
	<I18nextProvider i18n={i18n}>
		<Suspense fallback="loading">
			<Root></Root>
		</Suspense>
	</I18nextProvider>,
	document.getElementById("target")
);
