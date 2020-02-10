import React from 'react';
import MainPage from '../containers/MainPage';
import 'normalize.css';
import {Provider} from 'react-redux';
import store from '../store';


export default function(){
  return(
    <Provider store={store}> 
        <MainPage/>
    </Provider>
  )
}