import React, { Component } from 'react';
import styles from './styles.module.scss';
import Row from './Row'

const row=[
    { 
        
        "title":"Поднимает голову, чтобы взглянуть на окружающие предметы (конец 1 мес)"
    },
    { 
        
        "title":"Тело находится приемущественно в согнутом положении (конец 1 мес)е"
    }
        
]
export default class extends Component{

    render(){
        return( 
            <div className={styles.content_block}>
                <h4>{this.props.title}</h4>          
                <form action="#">
                    {row.map((el)=>{return <Row title={el.title}/>})}
                </form>
            </div>                     
        )
    }
}