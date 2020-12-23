import React from 'react';
import Form from '../Form/Form';

export default function AddBook () {
    
    const formData = 
        [
            {size: "100%", type: "text", label: "Title"}, 
            {size: "25%", type: "checkbox", label: "Genre" },
            {size: "25%", type: "text", label: "Year Published"},
            {size: "25%", type: "text", label: "Pages"}
        ];

        //add style objects for fields
        
    return (
        <div className="book-form">
            <h2>Add Book</h2>
            <Form formData={formData}/>
        </div>
    )
}

