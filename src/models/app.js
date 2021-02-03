import * as authService from '../services/api'
import { createAction } from '../util'


export default {
  namespace: 'app',
  state: {
    loading: false,
    name: '456',
    messages: []
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *a({ payload }, { call, put }) {
      console.log(payload);
      yield put({type: 'updateState', payload: {loading: true} });
      const login = yield call(authService.a, payload);
      console.log(login);
      yield put({type: 'updateState', payload: {loading: false} });
    },
    *getMessage({ payload }, { call, put }) {
      const data = yield call(authService.getMessage, payload);
      console.log(data);
      yield put({type: 'updateState', payload: {messages: data.data} });
    },
    *sendMessage({ payload }, { call, put }) {
      console.log(payload);
      yield put({type: 'updateState', payload: {loading: true} });
      const login = yield call(authService.a, payload);
      console.log(login);
      yield put({type: 'updateState', payload: {loading: false} });
    },
  },
  subscriptions: {

  },
}
