import React from "react";
import SubjectList from '../SubjectList/SubjectList';
import {useInput} from '../Hooks/Hooks';
import { useDispatch} from 'react-redux';

export default function AddSubject () {
    const [subjectProps, resetSubject] = useInput('');
    const dispatch = useDispatch();
    //form submit function
    const submit = event => {
        event.preventDefault();
        dispatch({type:'POST_SUBJECT', payload: {subject: subjectProps.value}});
        dispatch({type:'FETCH_SUBJECTS'});
        resetSubject();
    }

    const formData = 
    [
        {style: {width:"80%", border: "2px solid red"}, type: "text", label: "Subject Name", function: subjectProps}, 
    ];

    return (
     <div>
         <h2>Add Subject</h2>
         <form onSubmit={submit}>
                {formData.map((input) => 
                    <div key={input.id}><label>{input.label}</label><input {...input.function} type={input.type} style={input.style}/></div>
                    )}
                <button>Submit</button>
        </form>           
         <SubjectList/>
     </div>
     
    )
}