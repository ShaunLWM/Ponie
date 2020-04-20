import {
	deleteConfigRequest,
	deleteConfigResponse,
	readConfigRequest,
	readConfigResponse,
	savePasskeyRequest,
	savePasskeyResponse,
	writeConfigRequest,
} from "secure-electron-store";

const setKey = (key) => {
	return new Promise((resolve, reject) => {
		window.api.store.send(savePasskeyRequest, key);
		window.api.store.onReceive(savePasskeyResponse, function (args) {
			if (!args.success)
				return reject(`Failed to set passkey: ${JSON.stringify(args)}`);
			return resolve();
		});
	});
};

const set = (key, value) => {
	window.api.store.send(writeConfigRequest, key, value);
};

const get = (key, defaultValue = "") => {
	return new Promise((resolve, reject) => {
		window.api.store.send(readConfigRequest, key);
		window.api.store.onReceive(readConfigResponse, function (args) {
			if (!args.success) return reject(defaultValue);
			return resolve(args.value);
		});
	});
};

const deleteAll = () => {
	return new Promise((resolve, reject) => {
		window.api.store.send(deleteConfigRequest);
		window.api.store.onReceive(deleteConfigResponse, function (args) {
			if (!args.success)
				return reject(`Failed to delete file: ${JSON.stringify(args)}`);
			return resolve();
		});
	});
};

export { get, set, deleteAll, setKey };
