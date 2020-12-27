import React from "react";
import SubjectList from '../SubjectList/SubjectList';



export default function AddSubject () {
    const formData = 
    [
        {style: {width:"80%", border: "2px solid red"}, type: "text", label: "Subject Name"}, 
    ];

    return (
     <div>
         <h2>Add Subject</h2>
         <form>
                {formData.map((input, i) => 
                    <div key={i}><label>{input.label}</label><input type={input.type} style={input.style}/></div>
                    )}
                <button>Submit</button>
        </form>           
         <SubjectList/>
     </div>
     
    )
}