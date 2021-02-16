// System Import
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// Component Import
import AddInput from "../../page/addList/AddInput";
import AddContent from "../../page/addList/AddContent";
import Spinner from "../../components/spinner/Spinner";
import Alert from "../../components/alert/Alert";
// Reducer Import
import {
    funcLnbMenu
} from "../../store/modules/header";
import {
    weatherDataLoad,
    weatherInputValue,
    weatherResultAdd
} from "../../store/modules/weather";

function AddListContainer(){
    const dispatch = useDispatch();
    const {
        lnbMenu
    } = useSelector(( state ) => state.header);
    const {
        value,
        post,
        weatherTemp
    } = useSelector(( state ) => state.weather );

    // 초기 한번 실행
    useEffect(() => {
        if( lnbMenu ){
            dispatch( funcLnbMenu(false) );
        }

        if( post.error ){
            setAlertActive({
                active : true,
                title : "검색어를 정확하게 입력해주세요."
            });
        }
    }, [post.error]);

    // Alert 데이터
    const [alertActive, setAlertActive] = useState({
        active : false,
        title : ""
    });

    // Input Value
    const evtInputValue = (e) => {
        dispatch( weatherInputValue(e.target.value) );
    }
    // Input KeyDown
    const evtInputKey = (e) => {
        if( e.key === "Enter" ){
            evtSearch();
        }
    }

    // Search Button
    const evtSearch = () => {
        if( !value ){
            setAlertActive({
                active : true,
                title : "검색어를 입력해주세요."
            });

            return false;
        }

        dispatch( weatherDataLoad() );
    }

    // Add Button
    const evtAddList = () => {
        dispatch( weatherResultAdd() );
    }

    // Alert 닫기
    const onAlertClose = () => {
        setAlertActive({
            ...alertActive,
            active : false
        });
    };

    return (
        <Fragment>
            {/* 검색 */}
            <AddInput
                psValue={value}
                evtInputValue={evtInputValue}
                evtInputKey={evtInputKey}
                evtSearch={evtSearch}
            />
            {/* //검색 */}

            {
                weatherTemp &&
                    <>
                        {/* 검색 결과 */}
                        <AddContent
                            psWeatherTemp={weatherTemp}
                            evtAddList={evtAddList}
                        />
                        {/* //검색 결과 */}
                    </>
            }

            {/* 로딩 Spinner */}
            <Spinner
                psLoading={post.loading}
            />

            {/* Alert */}
            <Alert
                alertActive={alertActive}
                onAlertClose={onAlertClose}
            />
        </Fragment>
    )
}

export default AddListContainer;
