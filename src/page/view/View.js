// System Import
import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
// Container Import
import ViewContainer from "../../container/view/ViewContainer";

const ViewForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    width:100%;
    height:100vh;
    background:linear-gradient(to top,#86dbff 0,#e0c3fc 100%);
    ${props =>
        props.styleform &&
        css`
            background:linear-gradient(to top,#138982 0,#0c2d5b 100%)
    `}
`;
const ViewFormBack = styled.div`
    position:absolute;
    left:3.25rem;
    top:3rem;
`;
const ViewFormBackBtn = styled.div`
    display:block;
    position:relative;
    width:80px;
    height:102px;
    padding-top:60px;
    font-size:11px;
    color:#fff;
    letter-spacing:1px;
    border:none;
    background:transparent;
    cursor:pointer;
    :before {
        content:"";
        position:absolute;
        left:0;
        top:0;
        width:64px;
        height:64px;
        border-radius:50%;
        background:#2b244d;
    }
    ${props =>
        props.styleform &&
        css`
            :before {
                background:#000;
            }
    `}
`;
const ViewFormBackBtnSpan = styled.span`
    position:absolute;
    left:15px;
    top:30px;
    width:65px;
    height:2px;
    background:#fff;
    :before,
    :after {
        content:"";
        position:absolute;
        left:-4px;
        width:30px;
        height:2px;
        background:#fff;
    }
    :before {
        top:-10px;
        transform:rotate(-45deg);
    }
    :after {
        top:10px;
        transform:rotate(45deg);
    }
`;

function View(){
    const history = useHistory();
    const {
        styleMenu
    } = useSelector(( state ) => state.header);

    // 뒤로가기 버튼
    const evtHistoryBack = () => {
        history.goBack();
    }

    return (
        <ViewForm styleform={styleMenu}>
            {/* Back 버튼 */}
            <ViewFormBack>
                <ViewFormBackBtn type="button" styleform={styleMenu} onClick={evtHistoryBack}>
                    <ViewFormBackBtnSpan />
                </ViewFormBackBtn>
            </ViewFormBack>
            {/* //Back 버튼 */}

            {/* 내용 */}
            <ViewContainer />
            {/* //내용 */}
        </ViewForm>
    )
}

export default View;