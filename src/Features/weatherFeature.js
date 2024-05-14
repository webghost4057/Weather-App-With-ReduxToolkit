import {createSlice} from '@reduxjs/toolkit'
const initialState={
    details : null
}


export const weatherSlice = createSlice({
    name:'weather', 
    initialState, 
    reducers:{
        getWeatherDetail:(state , action)=>{
            state.details = action.payload
            console.log("@@@@@@@@@",state.details);
        }
    }
})

export const {getWeatherDetail} = weatherSlice.actions

export default weatherSlice.reducer 