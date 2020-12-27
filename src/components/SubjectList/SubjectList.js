import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table';

export default function SubjectList() {
    const subjectList = useSelector(state => state.subjectReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_SUBJECTS'})}, []);

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Total Books</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {subjectList.map(s=> 
                    <tr key={s.id}>
                        <td>{s.subject}</td>
                        <td>{s.count}</td>
                    </tr>)}
            </tbody>
        </Table>
    )
};