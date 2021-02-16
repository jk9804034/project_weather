// System Import
import React, { Fragment } from "react";
import styled from "styled-components";
// Container Import
import LoginContainer from "../../container/member/LoginContainer";

const ContainerForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:91vh;
    background:linear-gradient(to top,#5ee7df 0,#66a6ff 100%);
`;

function Login(){
    return (
        <Fragment>
            <ContainerForm>
                <LoginContainer />
            </ContainerForm>
        </Fragment>
    )
}

export default Login;