import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            allArticles:10,
            actualArtticles:6,
        }
    };

    render(){
        return(
            <div className={styles.range}>
                <div className={styles.content_range}>
                    <span className={styles.left_range_count}>
                        <span className={styles.number}> {this.state.allArticles}</span>
                        <span>Тем всего</span>
                    </span>
                    <span className={styles.right_range_count}>
                        <span className={styles.number}>{this.state.actualArtticles}</span>
                        <span>Тем выполнено</span>
                    </span>
                </div>
            </div>
        )
    }
}