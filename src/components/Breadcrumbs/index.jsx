import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {             
            crumb1:'Академия родительского мастерства',          
            crumb2:'Модуль 12',
        }
    };

    render(){
        return(
            <section className={styles.bg_gray}>
                <div className={styles.container}>
                    <ul className={styles.breadcrumb}>
                        <li><a href="./">Главная</a></li>
                        <li><a href="./">{this.state.crumb1}</a></li>             
                        <li className={styles.active}>{this.state.crumb2}</li>
                    </ul>
                </div>        
            </section>
        )
    }
}