// System Import
import React, { Fragment } from "react";
import styled, { css } from "styled-components";
// Etc Import
import { imageType } from "../../utils/common/common";

const ItemListContent = styled.div`
    opacity:0;
    transition:opacity 1s;
    ${props => 
        props.active &&
        css`
            opacity:1;
    `}
`;
const ItemList = styled.div`
    width:368px;
    margin:45px auto 33px;
    border-radius:50px;
    box-shadow:0px 0px 35px #888;
`;
const ItemListLink = styled.a`
    display:flex;
    flex-direction:column;
    height:546px;
    padding:32px;
    color:#000;
    text-decoration:none;
    border-radius:30px;
    background:#fff;
    box-sizing:border-box;
`;
const ItemListTitle = styled.h2`
    margin-top:0;
    font-size:22px;
    text-align:center;
`;
const ItemListAdd = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    height:190px;
    margin-top:45px;
`;
const ItemListAddImg = styled.img`
    width:160px;
    height:157px;
`;
const ItemListTemperature = styled.div`
    
`;
const ItemListTemperatureNum = styled.p`
    font-size:42px;
    text-align:center;
`;
const ItemListTemperatureWeather = styled.p`
    font-size:15px;
    letter-spacing:0.1em;
    text-align:center;
`;
const ItemListGaptemperature = styled.ul`
    display:flex;
    justify-content:center;
    margin-top:50px;
    padding:0 33px;
`;
const ItemListGaptemperatureLi = styled.li`
    flex:1 1;
    position:relative;
    padding-top:20px;
    list-style:none;
    text-align:center;
    :before {
        content:"";
        position:absolute;
        left:50%;
        top:0;
        width:0;
        height:0;
        margin-left:-10px;
        border-width:10px;
        border-style:solid;
        border-color:#fff transparent transparent transparent;
    }
    ${props => 
        props.type === "min" ?
        css`
            :before {
                border-top-color:#00ff9b;
            }
        ` :
        css`
            :before {
                top:-10px;
                border-bottom-color:#ff0070;
            }
    `}
`;
const ItemListGaptemperatureLiNum = styled.span`
    display:block;
    font-size:30px;
`;
const ItemListGaptemperatureLiText = styled.span`
    display:block;
    ${props => 
        props.type === "min" ?
        css`
            color:#00ff9b;
        ` :
        css`
            color:#ff0070;
    `}
`;
const ItemListBtnForm = styled.div`
    margin-bottom:20px;
    text-align: center;
`;
const ItemListBtn = styled.button`
    padding: 15px 30px;
    font-weight: bold;
    font-size: 15px;
    color: #fff;
    border: none;
    border-radius: 30px;
    background: #2b244d;
    cursor: pointer;
`;

function AddContent({
    psWeatherTemp,
    evtAddList
}){
    // 이미지 경로
    const weatherImgSrc = imageType(psWeatherTemp.typeWeather);

    return (
        <Fragment>
            <ItemListContent active={true}>
                {/* 목록 */}
                <ItemList>
                    <ItemListLink>
                        <ItemListTitle>{psWeatherTemp.cityName}</ItemListTitle>
                        <ItemListAdd>
                            <ItemListAddImg src={weatherImgSrc}></ItemListAddImg>
                        </ItemListAdd>
                        <ItemListTemperature>
                            <ItemListTemperatureNum>{psWeatherTemp.curWeather}°</ItemListTemperatureNum>
                            <ItemListTemperatureWeather>{psWeatherTemp.typeWeather}</ItemListTemperatureWeather>
                        </ItemListTemperature>
                        <ItemListGaptemperature>
                            <ItemListGaptemperatureLi type="min">
                                <ItemListGaptemperatureLiNum>{psWeatherTemp.minWeather}</ItemListGaptemperatureLiNum>
                                <ItemListGaptemperatureLiText type="min">Min</ItemListGaptemperatureLiText>
                            </ItemListGaptemperatureLi>
                            <ItemListGaptemperatureLi type="max">
                                <ItemListGaptemperatureLiNum>{psWeatherTemp.maxWeather}</ItemListGaptemperatureLiNum>
                                <ItemListGaptemperatureLiText type="max">Max</ItemListGaptemperatureLiText>
                            </ItemListGaptemperatureLi>
                        </ItemListGaptemperature>
                    </ItemListLink>
                </ItemList>
                {/* //목록 */}

                {/* 버튼 */}
                <ItemListBtnForm>
                    <ItemListBtn type="button" onClick={evtAddList}>
                        ADD CITY +
                    </ItemListBtn>
                </ItemListBtnForm>
                {/* //버튼 */}
            </ItemListContent>
        </Fragment>
    )
}

export default AddContent;