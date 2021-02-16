// System Import
import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
// Container Import
// Component Import

const Aside = styled.aside`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    pointer-events:none;
    ${props => 
        props.active &&
        css`
            pointer-events: auto;
            z-index: 2;
    `}
`;
const AsideForm = styled.div`
    position:absolute;
    left:-416px;
    top:0;
    width:416px;
    height:100%;
    box-shadow:0 0 2rem rgba(0,0,255,.1);
    background:#fff;
    z-index:10;
    transition:all 0.3s;
    ${props => 
        props.active &&
        css`
            left: 0;
    `}
    ${props => 
        props.styleform &&
        css`
            background:#1e1f21;
    `}
`;
const AsideFormHead = styled.div`
    overflow:hidden;
    box-shadow:0 0.5rem 2rem rgba(0,0,255,.2);
    background:linear-gradient(to right,#00ff9b,#5f84fb);
    ${props =>
        props.styleform &&
        css`
            box-shadow:0 0.5rem 2rem rgba(0,0,0,.2);
            background:#292a2d;
    `}
`;
const AsideFormHeadQuick = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:80px;
    height:65px
`;
const AsideFormHeadQuickBtn = styled.button`
    position:relative;
    width:100%;
    height:100%;
    text-indent:-9999px;
    border:none;
    background:transparent;
    cursor:pointer;
`;
const AsideFormHeadQuickBtnSpan = styled.span`
    position:absolute;
    left:50%;
    top:25px;
    width:25px;
    height:2px;
    margin-left:-14px;
    background:#2b244d;
    &:before,
    &:after {
        content:"";
        position:absolute;
        left:0;
        width:25px;
        height:2px;
        background:#2b244d;
    }
    &:before {
        top:7px;
    }
    &:after {
        top:14px;
    }
    ${props =>
        props.styleform &&
        css`
            background:#fff;
            :before,
            :after {
                background:#fff;
            }
    `}
`;
const AsideFormHeadTitle = styled.h2`
    margin-top:20px;
    font-weight:normal;
    font-size:18px;
    color:#fff;
    letter-spacing:0.2em;
    text-align:center;
`;
const AsideFormHeadInfo = styled.div`
    display:flex;
    margin:55px 0;
`;
const AsideFormHeadInfoIcon = styled.div`
    width:64px;
    height:64px;
    margin:0px 25px 0 30px;
`;
const AsideFormHeadInfoImg = styled.img`
    width:100%;
    vertical-align:top;
`;
const AsideFormHeadInfoText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    flex:1;
    color:#fff;
`;
const AsideFormHeadInfoId = styled.p`
    font-size:18px;
    ${props =>
        props.styleform &&
        css`
            background:#1e1f21;
    `}
`;
const AsideFormHeadInfoMsg = styled.p`
    margin-top:9px;
    font-size:15px;
`;
const AsideFormMenu = styled.ul`
    padding:30px 0 0 40px;
`;
const AsideFormMenuLi = styled.li`
    margin:10px 0;
    list-style:none;
`;
const AsideFormMenuLiLink = styled(Link)`
    display:block;
    padding:10px;
    font-size:16px;
    color:#666;
    text-decoration:none;
    &.active {
        color:#495cfc;
        border-bottom:1px solid #495cfc;
    }
    ${props =>
        props.active &&
        css`
            color: #495cfc;
            border-bottom: 1px solid #495cfc;
    `}
    ${props =>
        props.styleform &&
        css`
            color: #ccc;
    `}
    ${props =>
        (props.styleform && props.active) &&
        css`
            color: #fff;
            border-color:#fff;
    `}
`;
const AsideFormBg = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:#0c1066;
    opacity:0;
    visibility:hidden;
    transition:all 0.3s;
    ${props => 
        props.active &&
        css`
            opacity: 0.3;
            visibility: visible;
    `}
`;

function LnbContent({
    psLocation,
    psLnbMenu,
    psStyleMenu,
    evtLnbActive
}){
    return (
        <Fragment>
            {/* [Aside] active="true" */}
            <Aside active={psLnbMenu}>
                <AsideForm active={psLnbMenu} styleform={psStyleMenu}>
                    {/* [Aside] - User Info */}
                    <AsideFormHead styleform={psStyleMenu}>
                        {/* [Aside] - Quick Menu */}
                        <AsideFormHeadQuick>
                            <AsideFormHeadQuickBtn type="button" onClick={evtLnbActive}>
                                <AsideFormHeadQuickBtnSpan styleform={psStyleMenu}>메뉴</AsideFormHeadQuickBtnSpan>
                            </AsideFormHeadQuickBtn>
                        </AsideFormHeadQuick>
                        {/* //[Aside] - Quick Menu */}

                        {/* [Aside] - Title */}
                        <AsideFormHeadTitle>
                            WELCOME BACK
                        </AsideFormHeadTitle>
                        {/* //[Aside] - Title */}

                        {/* [Aside] - Info */}
                        <AsideFormHeadInfo>
                            <AsideFormHeadInfoIcon>
                                <AsideFormHeadInfoImg src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" />
                            </AsideFormHeadInfoIcon>

                            <AsideFormHeadInfoText>
                                <AsideFormHeadInfoId>lovelyklovelykjt@gmail.com</AsideFormHeadInfoId>
                                <AsideFormHeadInfoMsg>Free Plan</AsideFormHeadInfoMsg>
                            </AsideFormHeadInfoText>
                        </AsideFormHeadInfo>
                        {/* //[Aside] - Info */}
                    </AsideFormHead>
                    {/* //[Aside] - User Info */}   

                    {/* [Aside] - Menu */}
                    <AsideFormMenu>
                        <AsideFormMenuLi>
                            <AsideFormMenuLiLink to="/" active={psLocation.pathname === "/"} styleform={psStyleMenu}>Home</AsideFormMenuLiLink>
                        </AsideFormMenuLi>
                        <AsideFormMenuLi>
                            <AsideFormMenuLiLink to="/add" active={psLocation.pathname === "/add"} styleform={psStyleMenu}>Add City</AsideFormMenuLiLink>
                        </AsideFormMenuLi>
                        <AsideFormMenuLi>
                            <AsideFormMenuLiLink to="/login" active={psLocation.pathname === "/login"} styleform={psStyleMenu}>login</AsideFormMenuLiLink>
                        </AsideFormMenuLi>
                    </AsideFormMenu>
                    {/* //[Aside] - Menu */}
                </AsideForm>

                {/* [Aside] - 배경 */}
                <AsideFormBg active={psLnbMenu} onClick={evtLnbActive} />
                {/* //[Aside] - 배경 */}
            </Aside>
            {/* //[Aside] */}
        </Fragment>
    )
}

export default React.memo(LnbContent);