import {createSlice} from '@reduxjs/toolkit'
import WeatherApi from '../Api/WeatherApi'
const initialState={
    details : null
}


export const weatherSlice = createSlice({
    name:'weather', 
    initialState, 
    reducers:{
        getWeatherDetail:(state , action)=>{
            state.details = action.payload
        }
    }
})

export const {getWeatherDetail} = weatherSlice.actions

export default weatherSlice.reducer