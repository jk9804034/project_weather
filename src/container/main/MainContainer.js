// System Import
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// Component Import
import MainContent from "../../page/main/MainContent";
// Reducer Import
import {
    funcLnbMenu
} from "../../store/modules/header";

function MainContainer(){
    const dispatch = useDispatch();
    const {
        lnbMenu
    } = useSelector(( state ) => state.header);
    const {
        weathers
    } = useSelector(( state ) => state.weather);
    // 초기 한번 실행
    useEffect(() => {
        if( lnbMenu ){
            dispatch( funcLnbMenu(false) );
        }
    }, []);

    return (
        <Fragment>
            <MainContent
                psWeathers={weathers}
            />
        </Fragment>
    )
}

export default MainContainer;
