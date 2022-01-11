
import styled from 'styled-components';
import { AuthContext } from "../Providers/auth";
import React from "react";
import { useState , useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
margin-top: 80px;`

const InputInfo = styled.form`
width: 450px;
margin-left: 75px;
`

const SingleInput = styled.input`
width: 450px;
height: 60px;
margin-top: 10px;
border-radius: 20px;
border-style: solid;
border: 3px, lightgrey;
color: ${props => props.inputColor || "gray"};
background-color: ${props => props.backColor ||  "white"};
font-weigth: bold;
font-size: 30px;`

const CreateAccount = styled.div`
margin: auto;
font-size: 20px;
color: #52B6FF;
width: 450px;
text-align: center;
margin-top: 10px;`


export default function LandingPage()
{

    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{setLoading(false)},3000)
    },[])

    const {user, setUser }= React.useContext(AuthContext);
    console.log(user);
    const {serverResponse, setServerResponse} = React.useContext(AuthContext);

    const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

    function PostInformation(event)
    {
            event.preventDefault()

            setUser (email, password);

            const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {email: email, password: password});

            requisicao.then( setServerResponse (requisicao.data));

            requisicao.catch (console.log('login falhou'));

	 


    
    }



    return(
    
    <Background>

        <Body>

            <Logo src="logotrackit.png"/>
            <InputInfo onSubmit={PostInformation}>

                <SingleInput type="email" placeholder=" email" value={email} onChange={e => setEmail(e.target.value)}></SingleInput>
                <SingleInput type="password" placeholder="  senha" value={password} onChange={e => setPassword(e.target.value)}></SingleInput>
                <SingleInput type="submit" inputColor="white" backColor="#52B6FF;" defaultValue="Cadastrar"></SingleInput>
                


            </InputInfo>

            <CreateAccount >
                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </CreateAccount>

        </Body>

    </Background>

    );
}