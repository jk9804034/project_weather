// System Import
import React, { Fragment } from "react";
import styled from "styled-components";

const SearchHeader = styled.div`
    overflow: hidden;
    min-height: 40%;
`;
const SearchTitle = styled.h2`
    margin-top: 60px;
    font-size: 30px;
    text-align: center;
`;
const SearchInputForm = styled.div`
    position: relative;
    margin-top: 50px;
    padding: 0 50px;
    font-size: 30px;
`;
const SearchInputFormInput = styled.input`
    width: 100%;
    height: 66px;
    padding: 0 24px;
    font-size: 18px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 0px 25px #ddd;
    outline: none;
    box-sizing: border-box;
`;
const SearchInputFormBtn = styled.button`
    position: absolute;
    right: 49px;
    top: -8px;
    width: 80px;
    height: 80px;
    text-indent: -9999px;
    border: none;
    border-radius: 50%;
    background: #31feae;
    box-shadow: 0px 0px 30px #ddd;
    cursor: pointer;
    :before,
    :after {
        content:"";
        position:absolute;
        left:22px;
        top:22px;
    }
    :before {
        width:25px;
        height:25px;
        border:2px solid #fff;
        border-radius:50%;
    }
    :after {
        left:50px;
        top:44px;
        width:2px;
        height:15px;
        background:#fff;
        transform:rotate(-45deg);
    }
`;
const SearchIcon = styled.div`
    display:flex;
    justify-content:center;
    margin-top:40px;
`;
const SearchIconSpan = styled.span`
    width:10px;
    height:10px;
    margin:0 12px;
    border:1px solid #333;
    border-radius:50%;
`;

function AddInput({
    psValue,
    evtInputValue,
    evtInputKey,
    evtSearch
}){
    return (
        <Fragment>
            {/* Edit Form */}
            <SearchHeader>
                <SearchTitle>SEARCH CITIES</SearchTitle>
                <SearchInputForm>
                    <SearchInputFormInput type="text" placeholder="SEARCH CITY" value={psValue} onChange={evtInputValue} onKeyDown={evtInputKey} />
                    <SearchInputFormBtn type="button" onClick={evtSearch}>검색</SearchInputFormBtn>
                </SearchInputForm>
                <SearchIcon>
                    <SearchIconSpan />
                    <SearchIconSpan />
                    <SearchIconSpan />
                </SearchIcon>
            </SearchHeader>
            {/* //Edit Form */}
        </Fragment>
    )
}

export default AddInput;