import styled from 'styled-components';
import { AuthContext } from "../Providers/auth";
import React from "react";
import { useState , useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RegisterPage()
{
    const Background = styled.div`
    background-color: lightgray;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;`

    const Body = styled.div`
    background-color: white;
    margin: auto;
    width: 600px;
    height: 100%;`

    const Logo = styled.img`
    width: 400px;
    height: 400px;
    margin-left: 100px;
    margin-top: 100px;`

    return(

    <Background>

        <Body>

            <Logo src="logotrackit.png"/>

        </Body>

    </Background>
    );
}