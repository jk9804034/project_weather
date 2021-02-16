// System Import
import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Container Import
import MainContainer from "../../container/main/MainContainer";

const ContainerForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    background:linear-gradient(to top,#5ee7df 0,#66a6ff 100%);
    ${props =>
        props.styleform &&
        css`
            background:linear-gradient(to top,#138982 0,#0c2d5b 100%)
    `}
`;
const WeatherForm = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    height:100%;
    min-height:100vh;
`;
const AddItem = styled.div`
    width:368px;
    margin:32px;
`;
const AddItemLink = styled(Link)`
    display:flex;
    flex-direction:column;
    min-height:536px;
    padding:32px;
    text-decoration:none;
    border-radius:30px;
    background:#fff;
    box-sizing:border-box;
    box-shadow:0 0 17px #6666;
`;
const AddItemTitle = styled.h2`
    margin:60px 0 10px;
    font-weight:bold;
    font-size:40px;
    color:#333;
    letter-spacing:2px;
    text-align:center;
    text-shadow:0 0 3px #888;
`;
const AddItemIcon = styled.div`
    display:flex;
    justify-content:center;
    margin-top:80px;
`;
const AddItemIconView = styled.div`
    position:relative;
    width:200px;
    height:200px;
    border-radius:50%;
    background:#ccc;
    :before,
    :after {
        content:"";
        position:absolute;
        left:50%;
        top:50%;
        width:113px;
        height:14px;
        border-radius:10px;
        background:#66a6ff;
        transform:translate(-50%, -50%);
    }
    :before {}
    :after {
        transform:translate(-50%, -50%) rotate(90deg);
    }
`;

function Main(){
    const {
        styleMenu
    } = useSelector(( state ) => state.header);

    return (
        <ContainerForm styleform={styleMenu}>
            <WeatherForm>
                {/* Main Contaner */}
                <MainContainer />
                {/* //Main Contaner */}

                {/* 추가 목록 */}
                <AddItem>
                    <AddItemLink to="/add">
                        <AddItemTitle>ADD CITY</AddItemTitle>
                        <AddItemIcon>
                            <AddItemIconView />
                        </AddItemIcon>
                    </AddItemLink>
                </AddItem>
                {/* //추가 목록 */}
            </WeatherForm>
        </ContainerForm>
    )
}

export default Main;