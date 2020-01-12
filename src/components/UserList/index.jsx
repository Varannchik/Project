import React, { Component } from 'react';
import UserPad from './UserPad'
import styles from './styles.module.scss';
import axios from 'axios';

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            userlist:[]            
        }
    };

    
    componentDidMount(){
        console.log('DidMount');
        axios.get('https://jsonplaceholder.typicode.com/users') //ссылка откуда делаю запрос 
            .then(data=>{                
                this.setState({
                    userlist:data.data
                });
            })
    }
    
    componentWillMount(){
        console.log('WillMount');
    }

    render(){
        console.log('render');
        return (
            <div>
                <div className={styles.text}>All users</div>
                <ul>
                    {this.state.userlist.map((el)=>{return <UserPad id={el.id} email = {el.email} name={el.name} username={el.username}/>})}               
                </ul>
            </div>        
        )
    }
    
}