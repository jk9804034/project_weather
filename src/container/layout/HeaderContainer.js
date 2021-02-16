// System Import
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
// Component Import
import HeaderContent from "../../page/layout/headerContent/HeaderContent";
// Reducer Import
import {
    funcLnbMenu,
    funcStyleMenu
} from "../../store/modules/header";

function HeaderContainer(){
    const dispatch = useDispatch();
    const {
        styleMenu
    } = useSelector((state) => state.header);

    // 전체 스타일 변경 이벤트
    const evtStyleChange = () => {
        dispatch( funcStyleMenu() );
    }

    // 사이드메뉴 이벤트
    const evtLnbActive = () => {
        dispatch( funcLnbMenu() );
    }

    return (
        <Fragment>
            <HeaderContent
                psStyleMenu={styleMenu}
                evtStyleChange={evtStyleChange}
                evtLnbActive={evtLnbActive}
            />
        </Fragment>
    )
}

export default HeaderContainer;
