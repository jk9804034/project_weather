// System Import
import React, { useRef } from "react";
import styled, { css } from "styled-components";
// Etc Import
import { imageType } from "../../utils/common/common";

const ViewContents = styled.div`
    width:75%;
    height:80%;
    margin:0 auto;
`;
const ViewHeader = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:400px;
    padding-top:30px;
    border-radius:15px 15px 0 0;
    background:linear-gradient(to top, #FDB9BA 0, #6767AC 100%);
    box-sizing:border-box;
    ${props =>
        props.styleform &&
        css`
            background:linear-gradient(to top,#5f2829 0,#070726 100%)
    `}

    
`;
const ViewHeaderToday = styled.div`
    flex:1 1;
`;
const ViewHeaderWeather = styled.p`
    font-size:95px;
    color:#fff;
    text-align:center;
`;
const ViewHeaderText = styled.p`
    margin:10px 20px 0 0;
    font-size:16px;
    color:#fff;
    text-transform:uppercase;
    letter-spacing:10px;
    text-align:center;
`;
const ViewHeaderEtc = styled.ul`
    display:flex;
    justify-content:center;
    margin-top:30px;
`;
const ViewHeaderEtcLi = styled.li`
    position:relative;
    padding:0 30px;
    text-align:center;
    list-style:none;
    :after {
        content:"";
        position:absolute;
        left:0;
        top:9px;
        width:2px;
        height:40px;
        background:#fff;
    }
    :first-child:after {
        display:none;
    }
`;
const ViewHeaderEtcTi = styled.p`
    font-size:12px;
    color:#fff;
    text-transform:uppercase;
    letter-spacing:5px;
`;
const ViewHeaderEtcValue = styled.p`
    margin-top:20px;
    font-size:14px;
    color:#fff;
`;
const ViewHeaderCityname = styled.div`
    display:inline-flex;
    justify-content:center;
    align-items:flex-start;
    flex:1 1;
    margin-top:45px;
    font-size:28px;
    color:#fff;
`;
const ViewHeaderCitynameText = styled.p`
    display:inline-flex;
    align-items:flex-start;
    padding-bottom:6px;
    box-shadow:0 3px 0 0 #fff;
`;
const ViewBody = styled.div`
    display:flex;
    min-height:200px;
    padding:40px;
    border-radius:0 0 15px 15px;
    background:#fff;
`;
const ViewBodyTwitter = styled.div`
    display:grid;
    grid-template-rows:2rem;
    grid-template-columns:1.5fr 1fr;
    -webkit-box-align:center;
    justify-self:center;
    align-items:center;
    width:45%;
    margin-right:50px;
`;
const ViewBodyTwitterTitle = styled.div`
    font-size:18px;
    color:#0c1066;
    text-align:center;
`;
const ViewBodyTwitterColor = styled.div`
    font-size:14px;
    color:#5f84fb;
    text-align:center;
`;
const ViewBodyWeek = styled.div`
    display:flex;
    justify-self:center;
    align-items:center;
    flex:1 1;
    padding-top:20px;
`;
const ViewBodyWeekUnit = styled.div`
    flex:1 1;
    margin:0 20px;
`;
const ViewBodyWeekTitle = styled.p`
    font-weight:bold;
    font-size:25px;
    color:#39437a;
    text-align:center;
`;
const ViewBodyWeekImage = styled.div`
    margin-top:10px;
    text-align:center;
`;
const ViewBodyWeekImg = styled.img`
    width:64px;
    height:64px;
`;
const ViewBodyWeekWeather = styled.p`
    margin-top:10px;
    font-size:30px;
    color:#0c1066;
    text-align:center;
`;
const ViewBodyWeekText = styled.p`
    margin-top:10px;
    padding-right:10px;
    font-size:11px;
    color:#2b244d;
    text-align:center;
`;

function ViewContent({
    psData,
    psCityName,
    psStyleMenu
}){
    // 요일 배열
    const date = new Date();
    const weekDay = date.getDay();
    const weekNum = useRef(weekDay);
    const weeks = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    // 5일 일기예보
    const weekList = psData.mnWeek.map((item, index) => {
        if( index > 0 ){
            if( weekNum.current <= weeks.length ){
                weekNum.current += 1;
            } else {
                weekNum.current = 1;
            }
        }

        // 이미지 경로
        const weatherImgSrc = imageType(item.weatherText);
        
        return (
            <ViewBodyWeekUnit key={index}>
                <ViewBodyWeekTitle>{weeks[(weekNum.current)-1]}</ViewBodyWeekTitle>
                <ViewBodyWeekImage>
                    <ViewBodyWeekImg src={weatherImgSrc} />
                </ViewBodyWeekImage>
                <ViewBodyWeekWeather>{item.weather}°</ViewBodyWeekWeather>
                <ViewBodyWeekText>{item.weatherText}</ViewBodyWeekText>
            </ViewBodyWeekUnit>
        )
    });

    return (
        <>
            <ViewContents>
                <ViewHeader styleform={psStyleMenu}>
                    <ViewHeaderToday>
                        <ViewHeaderWeather>{psData.mnWeather}°</ViewHeaderWeather>
                        <ViewHeaderText>{psData.mnWeatherIcon}</ViewHeaderText>
                        <ViewHeaderEtc>
                            <ViewHeaderEtcLi>
                                <ViewHeaderEtcTi>HUMIDITY</ViewHeaderEtcTi>
                                <ViewHeaderEtcValue>{psData.mnHumidity} %</ViewHeaderEtcValue>
                            </ViewHeaderEtcLi>
                            <ViewHeaderEtcLi>
                                <ViewHeaderEtcTi>WIND</ViewHeaderEtcTi>
                                <ViewHeaderEtcValue>{psData.mnWind} K/M</ViewHeaderEtcValue>
                            </ViewHeaderEtcLi>
                        </ViewHeaderEtc>
                    </ViewHeaderToday>

                    <ViewHeaderCityname>
                        <ViewHeaderCitynameText>{psCityName}</ViewHeaderCitynameText>
                    </ViewHeaderCityname>
                </ViewHeader>

                <ViewBody>
                    <ViewBodyTwitter>
                        <ViewBodyTwitterTitle>Twitter Feed</ViewBodyTwitterTitle>
                        <ViewBodyTwitterColor>#ABU DHABI</ViewBodyTwitterColor>
                    </ViewBodyTwitter>

                    <ViewBodyWeek>
                        {weekList}
                    </ViewBodyWeek>
                </ViewBody>
            </ViewContents>
        </>
    )
}

export default ViewContent;