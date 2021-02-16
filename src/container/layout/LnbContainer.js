// System Import
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// Component Import
import LnbContent from "../../page/layout/lnbContent/LnbContent";
// Reducer Import
import {
    funcLnbMenu
} from "../../store/modules/header";

function LnbContainer(){
    const dispatch = useDispatch();
    const location = useLocation();
    const {
        lnbMenu,
        styleMenu
    } = useSelector((state) => state.header);

    // 사이드메뉴 이벤트
    const evtLnbActive = () => {
        dispatch( funcLnbMenu() );
    }

    return (
        <Fragment>
            <LnbContent
                psLocation={location}
                psLnbMenu={lnbMenu}
                psStyleMenu={styleMenu}
                evtLnbActive={evtLnbActive}
            />
        </Fragment>
    )
}

export default LnbContainer;
