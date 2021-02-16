import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as callApi from "../../utils/fetch/post";

// 액션 타입
const WEATHER_DATA_LOAD = "weather/WEATHER_DATA_LOAD";
const WEATHER_DATA_SUCCESS = "weather/WEATHER_DATA_SUCCESS";
const WEATHER_DATA_ERROR = "weather/WEATHER_DATA_ERROR";
const WEATHER_INPUT_VALUE = "weather/WEATHER_INPUT_VALUE";
const WEATHER_LIST_ADD = "weather/WEATHER_LIST_ADD";

// 액션 생성 함수
export const weatherDataLoad = url => ({ type : WEATHER_DATA_LOAD, url });
export const weatherInputValue = value => ({ type : WEATHER_INPUT_VALUE, value });
export const weatherResultAdd = obj => ({ type : WEATHER_LIST_ADD, obj });

function* getPostSaga(){
    try {
        const stateValue = yield select();
        const response = yield call( callApi.postApi, `http://api.openweathermap.org/data/2.5/weather?q=${stateValue.weather.value}&appid=8f45638a68e1eba4bdfebc5007e0935b` );

        const addObj = {
            cityName : response.data.name,
            curWeather : Math.floor(response.data.main.temp - 273.15),
            minWeather : Math.floor(response.data.main.temp_min - 273.15),
            maxWeather : Math.floor(response.data.main.temp_max - 273.15),
            typeWeather : response.data.weather[0].main.toUpperCase()
        }

        yield put({
            type : WEATHER_DATA_SUCCESS,
            payload : addObj
        });
    } catch(e){
        yield put({
            type : WEATHER_DATA_ERROR,
            error : true,
            payload : e
        });
    }
}

export function* weatherPostSaga(){
    yield takeEvery(WEATHER_DATA_LOAD, getPostSaga);
}

// 초기 상태값
const initialState = {
    value : "",
    post : {
        loading : false,
        error : null
    },
    weatherTemp : null,
    weathers : []
};

export default function weather(state = initialState, action){
    switch(action.type){
        case WEATHER_DATA_LOAD : 
            return {
                ...state,
                post : {
                    loading : true,
                    error : null
                }
            };
        case WEATHER_DATA_SUCCESS : 
            return {
                ...state,
                post : {
                    loading : false,
                    error : null
                },
                weatherTemp : action.payload
            };
        case WEATHER_DATA_ERROR : 
            return {
                ...state,
                post : {
                    loading : false,
                    error : action.error
                }
            };
        case WEATHER_INPUT_VALUE :
            return {
                ...state,
                value : action.value
            };
        case WEATHER_LIST_ADD :
            return {
                ...state,
                value : "",
                weathers : [
                    ...state.weathers,
                    state.weatherTemp
                ],
                weatherTemp : null
            };
        default :
            return state;
    }
}

