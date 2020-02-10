// import {

// } from '../../src/actions/actionTypes';
// import update from 'immutability-helper';


const initialState = {
    user: [
        {
            'id': '',
            'name':'Ivan',
            'age':'28',
            'gender':'male'       
        },
        {            
            'id': '',
            'name':'Petro',
            'age':'31',
            'gender':'male'        
        },
        {            
            'id': '',
            'name':'Iren',
            'age':'22',
            'gender':'female'        
        },
        {            
            'id': '',
            'name':'Olga',
            'age':'35',
            'gender':'female'       
        }
    ]
    
}

export default function(state=initialState, action){
    
    switch (action.type) {
        default:
            return state;
    }

}