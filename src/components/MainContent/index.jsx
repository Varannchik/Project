import React, { Component } from 'react';
import styles from './styles.module.scss';
import Range from '../../components/Range';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            title:'1 Год, 3-ий месяц', 
            text:'Прохождение этой темы позволит вам избежать частных ошибок  при воспитании детей от 0 до 3 лет. Результат - правильные и четкие шаги для достижения цели.',          
            actualText:'Название актуальной темы',
        }
    };

    render(){       
        return (
            <>
                <div className={styles.main_content}> 
                    <div className={styles.name_main_content}>
                        <div className={styles.container}>
                            <h1>{this.state.title}</h1>  
                        </div>
                    </div>            
                    <div className={styles.container}>
                        <div className={styles.main_info}>
                            <div className={styles.text}>
                                <p>{this.state.text}</p>
                                    <Range/>
                                <h3>{this.state.actualText}</h3>  
                            </div>                
                        </div> 
                    </div>
                </div>
            </>
        )
    }
}