import { all } from "redux-saga/effects";
import EmployeeSaga from "./EmployeeSaga";

export default function* rootSaga() {
    yield all([EmployeeSaga()]);
  }