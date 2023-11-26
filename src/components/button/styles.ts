import styled, { css } from "styled-components";
import {  IButtonStyled } from "./types";


export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border: 2px solid #000;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;


    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 9px);
            border-radius: 22px;
        }
    `}
`