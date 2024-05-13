import {createSlice} from '@reduxjs/toolkit'
import WeatherApi from '../Api/WeatherApi'
const initialState={
    data:null
}
export const weatherSlice = createSlice({
    name : 'weather',
    initialState,
    reducers:{
        getWeatherDetail : (state, action) =>{
            WeatherApi(action.payload)
                .then(details => {
                    state.data = details;
                })
                .catch(error => {
                    console.error('Error fetching weather:', error);
                });
        }
    }
})


export const {getWeatherDetail} = weatherSlice.actions

export default weatherSlice.reducer