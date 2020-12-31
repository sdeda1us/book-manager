import React, {useState} from "react";
import styled, {css} from 'styled-components';


//-------------------------------STYLED COMPONENTS-------------------------------//

const EditButton = styled.button`
    border-radius: 5px;
    box-shadow: inset -3px 6px 5px 0px rgba(249, 21, 25, 0.5);
    margin: 10px;
    background-color: rgba(188,103,37,1);
    color: white;
    height: 2rem;
    width: 6rem;
`
const SubmitButton = styled.button`
    border-radius: 5px;
    box-shadow: inset -3px 6px 5px 0px rgba(40, 81, 214, 0.4);
    margin: 10px;
    background-color: rgb(40, 81, 214);
    color: white;
    height: 40px;
    width: 100px;
`

export default function ImageList(book) {
    let [showEditButton, toggleButton] = useState(true);
    const handleToggle = () => {
        toggleButton(!showEditButton);
    }

    return (
            <tr>
                <td>{book.book.title}</td>
                <td>{book.book.url}</td>
                {showEditButton ? <td><EditButton onClick={handleToggle}>Edit URL</EditButton></td>:<td><SubmitButton onClick={handleToggle}>Submit</SubmitButton></td>}
            </tr>
        
    )
}