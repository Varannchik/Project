import React, { Component } from 'react';
import styles from './styles.module.scss';
import FormRow from '../FormRow'


export default class extends Component{

    constructor(props){
        super(props);
        this.state = {             
            h2:'Задачи модуля',          
            
        }
    };    

    render(){
        return(
            <section >
                <div class={styles.container}>
                    <div class={styles.name_section}>
                        <h2>{this.state.h2}</h2>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.62744 0.352941C7.34858 -0.117647 6.65142 -0.117647 6.37256 0.352941L0.0981455 10.9412C-0.180717 11.4118 0.167862 12 0.725588 12L13.2744 12C13.8321 12 14.1807 11.4118 13.9019 10.9412L7.62744 0.352941Z" fill="#222B3A"/>
                        </svg>
                    </div>
                    <div class={styles.section_content}>
                        <FormRow/>
                    </div>
                </div>
            </section>
        )
    }
}