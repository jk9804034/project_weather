// System Import
import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
// Container Import
import AddListContainer from "../../container/addList/AddListContainer";

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
const EditForm = styled.div`
    display:flex;
    width:90vw;
    height:87vh;
    margin-top:-4rem;
    border-radius:30px;
    box-sizing:border-box;
`;
const EditType = styled.div`
    display:flex;
    flex-direction:column;
    flex:1 1;
    overflow-y:auto;
    position:relative;
    height:100%;
    border-radius:20px 0 0 20px;
    background:#fff;
`;
const EditMonth = styled.div`
    flex:1 1;
    padding:60px 30px 30px;
    border-radius:0 20px 20px 0;
    background:#888;
`;
const EditMonthTitle = styled.h2`
    position:relative;
    margin-top:2px;
    padding-bottoM:20px;
    font-size:30px;
    color:#fff;
    text-align:center;
`;
const EditMonthDate = styled.p`
    margin-top:20px;
    color:#fff;
    text-align:center;
`;
const EditMonthImage = styled.div`
    margin-top:100px;
    text-align:center;
`;
const EditMonthImg = styled.img`
    width:120px;
`;
const EditMonthWeather = styled.p`
    margin-top:40px;
    font-size:80px;
    color:#fff;
    text-align:center;
`;
const EditMonthName = styled.p`
    font-size:28px;
    color:#fff;
    text-align:center;
`;
const EditMonthClear = styled.p`
    margin-top:30px;
    color:#fff;
    text-align:center;
`;
const EditMonthFollow = styled.p`
    display:block;
    width:120px;
    padding:20px 0;
    margin:30px auto 0;
    font-size:14px;
    color:#fff;
    text-align:center;
    border:2px solid #fff;
    border-radius:50px;
`;

function AddList(){
    const {
        styleMenu
    } = useSelector(( state ) => state.header);

    return (
        <Fragment>
            <ContainerForm styleform={styleMenu}>
                {/* Edit From */}
                <EditForm>
                    {/* Edit */}
                    <EditType>
                        <AddListContainer />
                    </EditType>
                    {/* //Edit */}

                    {/* Month weather */}
                    <EditMonth>
                        <EditMonthTitle>CITY OF THE MONTH</EditMonthTitle>
                        <EditMonthDate>Sunday, 31th July</EditMonthDate>
                        <EditMonthImage>
                            <EditMonthImg />
                        </EditMonthImage>
                        <EditMonthWeather>13°</EditMonthWeather>
                        <EditMonthName>ROME IT</EditMonthName>
                        <EditMonthClear>C L E A R</EditMonthClear>
                        <EditMonthFollow>FOLLOW</EditMonthFollow>
                    </EditMonth>
                    {/* //Month weather */}
                </EditForm>
                {/* //Edit From */}
            </ContainerForm>
        </Fragment>
    )
}

export default AddList;