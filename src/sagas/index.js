import {watchGetUsers} from '../sagas/users';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
  ]);
}
