import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table';

export default function SubjectList() {
    const joinList = useSelector(state => state.joinReducer);
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type:'FETCH_JOIN'})}, []);

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
                {joinList.map(s=> 
                    <tr key={s.id}>
                        <td>{s.subject}</td>
                        <td>{s.count}</td>
                        <td>
                            <button onClick={() => 
                                {dispatch({type:'ERASE_SUBJECT', payload: s.id}); 
                                dispatch({type:'FETCH_JOIN'})}}>
                                Delete
                            </button>
                        </td>
                    </tr>)}
            </tbody>
        </Table>
    )
};