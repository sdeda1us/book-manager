import React from 'react';
import Form from '../Form/Form';

export default function AddBook () {
    
    const formData = 
        [
            {style: {width:"60%", border: "2px solid red"}, type: "text", label: "Title"}, 
            {style: {width:"25%"}, type: "checkbox", label: "Genre" },
            {style: {width:"25%"}, type: "text", label: "Year Published"},
            {style: {width:"25%"}, type: "text", label: "Pages"}
        ];

    

    return (
        <div className="book-form">
            <h2>Add Book</h2>
            <Form formData={formData}/>
        </div>
    )
}

