import ROUTES from "Constants/routes";
import Welcome from "Pages/welcome/welcome";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

class Routes extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path={ROUTES.WELCOME} component={Welcome}></Route>
				</Switch>
			</HashRouter>
		);
	}
}

export default Routes;
