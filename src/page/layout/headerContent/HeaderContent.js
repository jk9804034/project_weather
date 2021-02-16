// System Import
import React, { Fragment } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
// Container Import
// Component Import

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }
`;
const HeaderForm = styled.div`
    display:flex;
    ${props =>
        props.styleform &&
        css`
            background:#000;
    `}
`;
const HeaderQuickmenu = styled.div``;
const HeaderQuicBtn = styled.button`
    position:relative;
    width:80px;
    height:100%;
    text-indent:-9999px;
    border:none;
    background:transparent;
    cursor:pointer;
`;
const HeaderQuicSpan = styled.span`
    position:absolute;
    left:50%;
    top:25px;
    width:25px;
    height:2px;
    margin-left:-14px;
    background:#2b244d;
    :before,
    :after {
        content:"";
        position:absolute;
        left:0;
        width:25px;
        height:2px;
        background:#2b244d;
    }
    :before {
        top:7px;
    }
    :after {
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

const HeaderLogo = styled.div`
    display:flex;
    align-items:center;
    widows:160px;
    height:64px;
`;
const HeaderLogoSvg = styled.svg`
    height:32px;
`;

const HeaderTitle = styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    font-weight:500;
    font-size:20px;
    ${props =>
        props.styleform &&
        css`
            color:#fff;
    `}
`;

const HeaderSetup = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:240px;
    padding-right:10px;
    box-sizing:border-box;
`;
const HeaderSetupForm = styled.div`
    display:flex;
`;
const HeaderSetupText = styled.span`
    font-size:12px;
    text-transform:uppercase;
    letter-spacing:0.1rem;
    ${props =>
        props.styleform &&
        css`
            color:#fff;
    `}
`;
const HeaderSetupProgress = styled.div`
    width:30px;
    height:16px;
    margin:0 13px;
`;
const HeaderSetupProgressbg = styled.div`
    position:relative;
    width:100%;
    height:100%;
    border-radius:8px;
    background:#ccc;
    ${props =>
        props.styleform &&
        css`
            background:#666;
    `}
`;
const HeaderSetupProgressbtn = styled.button`
    position:absolute;
    left:0;
    top:-2px;
    width:20px;
    height:20px;
    margin-left:-10px;
    border:none;
    border-radius:50%;
    background:#2b244d;
    cursor:pointer;
    transition:all 0.3s;
    ${props =>
        props.active &&
        css`
            left:100%;
            background:#fff;   
    `}
`;

function HeaderContent({
    psStyleMenu,
    evtLnbActive,
    evtStyleChange
}){
    console.log(psStyleMenu);
    return (
        <Fragment>
            {/* [Header] */}
            <HeaderForm styleform={psStyleMenu}>
                {/* [Header] - Quick menu */}
                <HeaderQuickmenu>
                    <HeaderQuicBtn type="button" onClick={evtLnbActive}>
                        <HeaderQuicSpan styleform={psStyleMenu}>
                            메뉴
                        </HeaderQuicSpan>
                    </HeaderQuicBtn>
                </HeaderQuickmenu>
                {/* //[Header] - Quick menu */}

                {/* [Header] - Logo */}
                <HeaderLogo>
                    <HeaderLogoSvg _ngcontent-vgi-c0="" viewBox="150.3 22.2 213.7 42.8">
                        <path _ngcontent-vgi-c0="" d="M150.3 65V22.2L193 65z" data-name="Path 1" fill="#00ff9b"></path>
                        <path _ngcontent-vgi-c0="" d="M193.1 65h-42.8L193 22.2z" data-name="Path 2" fill="#003eff"></path>
                        <text _ngcontent-vgi-c0="" className="header__logo__text" fill={!psStyleMenu ? "#432c85" : "#fff" } fontFamily="SegoeUI-Semibold,Segoe UI" fontSize="30" fontWeight="600" letterSpacing=".1em" transform="translate(220 56)">
                            <tspan _ngcontent-vgi-c0="" x="0" y="0">Minimus</tspan>
                        </text>
                    </HeaderLogoSvg>
                </HeaderLogo>
                {/* //[Header] - Logo */}

                {/* [Header] - Title */}
                <HeaderTitle styleform={psStyleMenu}>TODAY</HeaderTitle>
                {/* //[Header] - Title */}

                {/* [Header] - Setup color */}
                <HeaderSetup>
                    <HeaderSetupForm>
                        <HeaderSetupText styleform={psStyleMenu}>LIGHT</HeaderSetupText>
                        <HeaderSetupProgress>
                            <HeaderSetupProgressbg styleform={psStyleMenu}>
                                <HeaderSetupProgressbtn type="button" active={psStyleMenu} onClick={evtStyleChange}></HeaderSetupProgressbtn>
                            </HeaderSetupProgressbg>
                        </HeaderSetupProgress>
                        <HeaderSetupText styleform={psStyleMenu}>DARK</HeaderSetupText>
                    </HeaderSetupForm>
                </HeaderSetup>
                {/* //[Header] - Setup color */}
            </HeaderForm>
            {/* //[Header] */}
        </Fragment>
    )
}

export default HeaderContent;