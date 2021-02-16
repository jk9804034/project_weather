import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as callApi from "../../utils/fetch/post";

// 액션 타입
const VIEW_DATA_LOAD = "view/VIEW_DATA_LOAD";
const VIEW_DATA_SUCCESS = "view/VIEW_DATA_SUCCESS";
const VIEW_DATA_ERROR = "view/VIEW_DATA_ERROR";
const VIEW_DATA_RESET = "view/VIEW_DATA_RESET";

// 액션 생성 함수
export const viewDataLoad = name => ({ type : VIEW_DATA_LOAD, name });
export const viewDataReset = () => ({ type : VIEW_DATA_RESET });

function* getPostSaga(){
    try {
        const stateName = yield select();
        const response = yield call( callApi.postApi, `http://api.openweathermap.org/data/2.5/forecast?q=${stateName.view.cityName}&appid=8f45638a68e1eba4bdfebc5007e0935b` );

        let tempArr = [];
        for( let i=0; i<response.data.list.length; i++ ){
            if( i % 8 === 0 ){
                tempArr.push({
                    weather : Math.floor(response.data.list[i].main.temp - 273.15),
                    weatherText : response.data.list[i].weather[0].main.toUpperCase()
                });
            }
        }
        
        const viewObj = {
            mnTitle : response.data.city.name,
            mnWeather : Math.floor(response.data.list[0].main.temp - 273.15),
            mnHumidity : response.data.list[0].main.humidity,
            mnWind : response.data.list[0].wind.speed,
            mnWeatherIcon : response.data.list[0].weather[0].main,
            mnWeek : tempArr
        }

        yield put({
            type : VIEW_DATA_SUCCESS,
            payload : viewObj
        });
    } catch(e){
        yield put({
            type : VIEW_DATA_ERROR,
            error : true,
            payload : e
        });
    }
}

export function* viewPostSaga(){
    yield takeEvery(VIEW_DATA_LOAD, getPostSaga);
}

// 초기 상태값
const initialState = {
    cityName : "",
    post : {
        loading : false,
        error : null
    },
    data : null
};

export default function weather(state = initialState, action){
    switch(action.type){
        case VIEW_DATA_LOAD : 
            return {
                ...state,
                cityName : action.name,
                post : {
                    loading : true,
                    error : null
                }
            };
        case VIEW_DATA_SUCCESS : 
            return {
                ...state,
                post : {
                    loading : false,
                    error : null
                },
                data : action.payload
            };
        case VIEW_DATA_ERROR : 
            return {
                ...state,
                post : {
                    loading : false,
                    error : action.error
                }
            };
        case VIEW_DATA_RESET :
            return {
                ...state,
                data : null
            }
        default :
            return state;
    }
}

