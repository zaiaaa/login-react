import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin-top: 120px;
`

export const LeftSide = styled.div`
    width: 50%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: red;
`

export const RightSide = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: blue;
`
export const TitleForm = styled.h2`
    font-size: 35px;
    font-weight: 700; 
`
export const Wrapper = styled.div`
    //display: flex;
    //justify-content: center;
    max-width: 260px; 
    width: 100%;
    //background-color: red;
    margin-top: .5rem;
`

export const SubTitleForm = styled.p`
    font-size: 20px;
    margin: 1rem 0;
`

export const Footer = styled.p`
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    margin-top: 2rem;
    text-align: center;
`

export const JaTemConta = styled.strong`
    font-size: 10px;
    margin: 1rem 0;   
    text-align: left;
`

export const ContaCriada = styled.p`
    font-size: 12px;
    color: green; 
`