import {createSlice} from '@reduxjs/toolkit'
import { userList } from './Data'
import Adduser from './Adduser'
const UserSlice = createSlice({
    name: "Aman",
    initialState: userList,
    reducers:{
        adduser: (state,action)=>{
            console.log(action.payload)
            state.push(action.payload)
        }
    }
})

export const {adduser}= UserSlice.actions 
export default UserSlice.reducer;