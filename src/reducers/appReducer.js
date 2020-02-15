// import {

// } from '../../src/actions/actionTypes';
// import update from 'immutability-helper';


const initialState = {
    columns: [
        { 'key': 'id', 'name': 'ID' },
        { 'key': 'name', 'name': 'Name' },
        { 'key': 'age', 'name': 'Age' },
        { 'key': 'gender', 'name': 'Gender' } 
    ],
    users: [
        {'id': 0, 'name': 'Ivan', 'age': 19, 'gender':'male'}, 
        {'id': 1, 'name': 'Iren', 'age': 20, 'gender':'female'}, 
        {'id': 2, 'name': 'Petro', 'age': 30, 'gender':'male'},
        {'id': 3, 'name': 'Olga', 'age': 29, 'gender':'female'},
    ]
    
}

export default function(state=initialState, action){
    
    switch (action.type) {
        default:
            return state;
    }

}