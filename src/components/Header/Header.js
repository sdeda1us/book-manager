import React from 'react';
import styled from 'styled-components';
import GlobalFonts from '../Fonts/Fonts';

const HeadStyle = styled.div`
    background-color: rgb(94, 33, 17);
    text-align: center;
    padding-top: 20px;
    width: 100;
    height: 100px;
    color: white;
    font-family: Quattrocento;
    border: 2px solid rgb(218, 180, 98);
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

