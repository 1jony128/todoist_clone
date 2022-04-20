import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeEvery } from "redux-saga/effects";
import { IDepartment } from "../../models/IDepartament";
import { IEmpoyee } from "../../models/IEmpoyee";
import { addDepartmentsSuccess, addEmployeeSuccess, removeDepartmentsSuccess, removeEmployeeSuccess, updateDepartmentsSuccess, updateEmployeeSuccess } from "../reducers/EmployeeSlice";

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms))

function* removeEmployeeWorker({payload}: PayloadAction<string>){
    yield delay(500)
    yield put(removeEmployeeSuccess(payload))
}

function* removeDepartamentWorker({payload}: PayloadAction<number>){
    yield delay(500)
    yield put(removeDepartmentsSuccess(payload))
}

function* updateEmployeeWorker({payload}: PayloadAction<IEmpoyee>){
    yield delay(500)
    yield put(updateEmployeeSuccess(payload))
}

function* updateDepartamentWorker({payload}: PayloadAction<IDepartment>){
    yield delay(500)
    yield put(updateDepartmentsSuccess(payload))
}

function* addDepartamentWorker({payload}: PayloadAction<IDepartment>){
    yield delay(500)
    yield put(addDepartmentsSuccess(payload))
}

function* addEmployeeWorker({payload}: PayloadAction<IEmpoyee>){
    yield delay(500)
    yield put(addEmployeeSuccess(payload))
}

export default function* EmployeeSaga() {
    yield takeEvery('employee/removeEmployee', removeEmployeeWorker)
    yield takeEvery('employee/removeDepartments', removeDepartamentWorker)
    yield takeEvery('employee/updateEmployee', updateEmployeeWorker)
    yield takeEvery('employee/updateDepartments', updateDepartamentWorker)
    yield takeEvery('employee/addDepartments', addDepartamentWorker)
    yield takeEvery('employee/addEmployee', addEmployeeWorker)
    
}