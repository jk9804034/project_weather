// System Import
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// Component Import
import LoginContent from "../../page/member/LoginContent";
// Reducer Import
import {
    funcLnbMenu
} from "../../store/modules/header";

function MainContainer(){
    const dispatch = useDispatch();
    const {
        lnbMenu
    } = useSelector(( state ) => state.header);
    // 초기 한번 실행
    useEffect(() => {
        if( lnbMenu ){
            dispatch( funcLnbMenu(false) );
        }
    }, []);

    return (
        <Fragment>
            <LoginContent />
        </Fragment>
    )
}

export default MainContainer;
