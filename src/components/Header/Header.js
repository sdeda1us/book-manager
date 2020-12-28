import React from 'react';
import styled from 'styled-components';

const HeadStyle = styled.div`
    background-color: black;
    width: 95%;
    height: 100px;
    color:white;`

export default function Header() {
    return (
        <HeadStyle>
            <h1>Book Database</h1>
        </HeadStyle>
        
    )
}

