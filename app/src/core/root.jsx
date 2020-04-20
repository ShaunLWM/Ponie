import Routes from "Core/routes";
import React from "react";
import { StateProvider } from "../store";

export default function Root() {
	return (
		<StateProvider>
			<Routes />
		</StateProvider>
	);
}
