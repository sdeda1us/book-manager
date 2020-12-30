import React from 'react';
import styled from 'styled-components';
import GlobalFonts from '../Fonts/Fonts';

const HeadStyle = styled.div`
    background-color: white;
    text-align: center;
    padding-top: 20px;
    width: 100;
    height: 100px;
    color: rgb(110, 99, 83);
    font-family: Quattrocento;
    border: 5px solid rgba(41, 147, 153, 0.71);
    border-radius: 5px;
    `

export default function Header() {
    return (
        <HeadStyle>
            <GlobalFonts/>
            <h1>Book Database</h1>
        </HeadStyle>
        
    )
}

