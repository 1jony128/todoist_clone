import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDepartment } from "../../models/IDepartament";
import { IEmpoyee } from "../../models/IEmpoyee";

interface IEmployeeSlice {
    employee: IEmpoyee[];
    departaments: IDepartment[];
    isLoading: boolean;
    error: string;
    editingEmployee: string | null;
    editingDepartament: number | null;
    selectDepartament: number;
    showEmployee: IEmpoyee | null;
}

const initialState : IEmployeeSlice = {
    employee: [{
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "1"
    },
    {
        firstName: "firstName1",
        lastName: "lastName1",
        departmentId: 2,
        id: "2"
    },
    {
        firstName: "firstName2",
        lastName: "lastName2",
        departmentId: 1,
        id: "3"
    },
    {
        firstName: "firstName3",
        lastName: "lastName3",
        departmentId: 2,
        id: "4"
    },
    {
        firstName: "firstName4",
        lastName: "lastName4",
        departmentId: 3,
        id: "5"
    },
    {
        firstName: "firstName5",
        lastName: "lastName5",
        departmentId: 3,
        id: "6"
    },],
    departaments: [
        {name: 'Marketing', description: 'Marketing description', departmentId: 1},
        {name: 'Support', description: 'Support description', departmentId: 2},
        {name: 'Accounting', description: 'Accounting description', departmentId: 3},
        {name: 'General', description: 'General description', departmentId: 4},
        {name: 'Administrative', description: 'Administrative description', departmentId: 5},
    ],
    isLoading: false,
    error: '',
    editingEmployee: null,
    editingDepartament: null,
    selectDepartament: 0,
    showEmployee: null
}


export const EmployeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee(state, action: PayloadAction<IEmpoyee>){
            state.isLoading = true;
        },
        addEmployeeSuccess(state, action: PayloadAction<IEmpoyee>) {
            state.isLoading = false;
            state.error = '';
            state.employee.push(action.payload);
        },
        addDepartments(state, action: PayloadAction<IDepartment>){
            state.isLoading = true;
        },
        addDepartmentsSuccess(state, action: PayloadAction<IDepartment>) {
            state.isLoading = false;
            state.error = '';
            state.departaments.push(action.payload);
        },
        removeEmployee(state, action: PayloadAction<string>){
            console.log("removeEmployee")
            state.isLoading = true;
        },
        removeEmployeeSuccess(state, action: PayloadAction<string>) {
            console.log("removeEmployeeSuccess")
            state.isLoading = false;
            state.error = '';
            state.employee = state.employee.filter(item => item.id !== action.payload);
        },
        removeDepartments(state, action: PayloadAction<number>){
            state.isLoading = true;
        },
        removeDepartmentsSuccess(state, action: PayloadAction<number>) {
            state.isLoading = false;
            state.error = '';
            state.departaments = state.departaments.filter(item => item.departmentId !== action.payload);
            state.employee = state.employee.filter(item => item.departmentId !== action.payload);
        },
        editEmployee(state, action: PayloadAction<string>){
            state.editingEmployee = action.payload
        },
        cancelEditEmployee(state){
            state.editingEmployee = null
        },
        updateEmployee(state, action: PayloadAction<IEmpoyee>){
            state.isLoading = true;
        },
        updateEmployeeSuccess(state, action: PayloadAction<IEmpoyee>) {
            state.isLoading = false;
            state.error = '';
            state.employee = state.employee.map(item => {
                if(item.id === action.payload.id){
                    return action.payload
                } else {
                    return item
                }
            })
            state.editingEmployee = null
        },
        editDepartments(state, action: PayloadAction<number>){
            state.editingDepartament = action.payload
        },
        cancelEditDepartments(state){
            state.editingDepartament = null
        },
        updateDepartments(state, action: PayloadAction<IDepartment>){
            state.isLoading = true;
        },
        updateDepartmentsSuccess(state, action: PayloadAction<IDepartment>) {
            state.isLoading = false;
            state.error = '';
            state.departaments = state.departaments.map(item => {
                if(item.departmentId === action.payload.departmentId){
                    return action.payload
                } else {
                    return item
                }
            })
            state.editingDepartament = null
        },
        selectDepartment(state, action: PayloadAction<number>){
            state.selectDepartament = action.payload
        },
        showEmployee(state, action: PayloadAction<IEmpoyee | null>){
            state.showEmployee = action.payload
        },

    }
})
export const {
    addEmployee,
    addEmployeeSuccess,
    addDepartments,
    addDepartmentsSuccess,
    removeEmployee,
    removeEmployeeSuccess,
    removeDepartments,
    removeDepartmentsSuccess,
    editEmployee,
    cancelEditEmployee,
    updateEmployee,
    updateEmployeeSuccess,
    editDepartments,
    cancelEditDepartments,
    updateDepartments,
    updateDepartmentsSuccess,
    selectDepartment,
    showEmployee
} = EmployeeSlice.actions

export default EmployeeSlice.reducer;