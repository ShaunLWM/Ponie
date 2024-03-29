import { createHashHistory } from "history";
import PropTypes from "prop-types";
import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";

const initialState = {};

const store = createContext(initialState);
const { Provider } = store;

function reducerFunction(draft, action) {
	switch (action.type) {
		default:
			draft = initialState;
	}
}

const StateProvider = ({ children }) => {
	const [state, dispatch] = useImmerReducer(reducerFunction, initialState);
	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const history = createHashHistory();

export { store, StateProvider, history };

StateProvider.propTypes = {
	children: PropTypes.element,
};
