import React from 'react';



export default function Form ({formData}) {
    return (
        <div className="form">
            <p>Hi From form!</p>
            {JSON.stringify(formData.labels)}
            <form>
                {formData.map(input => 
                    <div><label>{input.label}</label><input type={input.type} style={input.style}/></div>
                    )}
            </form>
        </div>
    )
}