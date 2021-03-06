import {createAction} from 'redux-actions';
import request, {METHODS} from 'utils/request';

export default {

	getAppList: createAction('GET_APP_LIST', () => request('/~m/app')),
	getApiList: createAction('GET_API_LIST', appId => request(`/~m/app/${appId}/api`), appId => ({appId})),
	getApi: createAction('GET_API', (appId, apiId) => request(`/~m/app/${appId}/api/${apiId}`)),

	createApp: createAction('CREATE_APP', data => request(`/~m/app`, data, METHODS.POST)),
	updateApp: createAction('UPDATE_APP', (appId, data) => request(`/~m/app/${appId}`, data, METHODS.PUT)),
	deleteApp: createAction('DELETE_APP', (appId, data) => request(`/~m/app/${appId}`, null, METHODS.DELETE)),

	createApi: createAction('CREATE_API', (appId, data) => request(`/~m/app/${appId}/api`, data, METHODS.POST)),
	updateApi: createAction('UPDATE_API', (appId, apiId, data) => request(`/~m/app/${appId}/api/${apiId}`, data, METHODS.PUT)),
	deleteApi: createAction('DELETE_API', (appId, apiId) => request(`/~m/app/${appId}/api/${apiId}`, null, METHODS.DELETE)),

};