// System Import
import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginBody = styled.div`
    display:flex;
    width:85%;
    min-height:80vh;
    border-radius:10px;
    box-shadow:0 0 17px #6666;
    background:#fff;
`;
const LoginExplain = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex:1;
    width:50%;
`;
const LoginTitle = styled.h2`
    font-size:2.5rem;
    color:#0c1066;
    letter-spacing:0.2rem;
`;
const LoginForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:80%;
    margin-top:2rem;
`;
const LoginInput = styled.input`
    width:100%;
    margin:1rem 0;
    padding:1.5rem;
    border-radius:2rem;
    outline:none;
    border:none;
    box-shadow:0 0 1.5rem rgb(0, 0, 255, 0.3);
    box-sizing:border-box;
`;
const LoginButton = styled.button`
    width:50%;
    padding:1rem;
    margin-top:1.5rem;
    font-size:1.1rem;
    color:#fff;
    border:none;
    border-radius:2rem;
    outline:none;
    cursor:pointer;
    box-shadow:0 0 0.5rem rgb(0, 0, 255, 0.3);
    background:#00ff9b;
`;
const LoginSignup = styled.div`
    margin-top:3rem;
`;
const LoginSignupText = styled.span`
    color:#666;
`;
const LoginSignupLink = styled(Link)`
    margin:1rem 0 0 1rem;
    color:#ff3a82;
    text-transfrom:uppercase;
    text-decoration:none;
`;
const LoginVisual = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:flex-end;
    flex:1;
    position:relative;
    width:50%;
    min-height:100%;
    border-radius:0 10px 10px 0;
    background:url(https://source.unsplash.com/random/1200x900?mountain) center center repeat;
    background-size:cover;
`;
const LoginVisualBg = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    border-radius:0 10px 10px 0;
    background-color:rgba(0, 0, 0, 0.15);
`;
const LoginVisualTitle = styled.h1`
    position:relative;
    margin:0 0 2rem 3rem;
    font-size:2.75rem;
    color:#fff;
    z-index:5;
`;
const LoginVisualLine = styled.hr`
    width:8rem;
    height:0.5rem;
    margin:0 0 8rem 3rem;
    border:none;
    background-color:#fff;
`;

function LoginContent(){
    return (
        <Fragment>
            <LoginBody>
                <LoginExplain>
                    <LoginTitle>Login</LoginTitle>
                    <LoginForm>
                        <LoginInput type="text" placeholder="Email" />
                        <LoginInput type="text" placeholder="Password" />
                        <LoginButton type="submit">Login</LoginButton>
                    </LoginForm>
                    <LoginSignup>
                        <LoginSignupText>Don't have an account?</LoginSignupText>
                        <LoginSignupLink>SIGN UP</LoginSignupLink>
                    </LoginSignup>
                </LoginExplain>
                <LoginVisual>
                    <LoginVisualBg />
                    <LoginVisualTitle>Welcome Back!</LoginVisualTitle>
                    <LoginVisualLine />
                </LoginVisual>
            </LoginBody>
        </Fragment>
    )
}

export default LoginContent;