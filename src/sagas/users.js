import {takeEvery, call, put } from 'redux-saga/effects';
import { GET_USERS, SET_USERS } from '../actions';
import axios from 'axios';

function* workerGetUsers() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = yield call(axios.get, url);
    yield put({ type: SET_USERS, value: response.data });
  } catch (error) {
    console.error('Failed to fetch users', error);
  }
}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS, workerGetUsers);
}