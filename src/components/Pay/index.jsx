import React , {useState} from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';

export function index(props){   
    return (
        <div>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.itemlist}>
                {props.item.map(el=><div className={styles.someitem}> 
                    <span>{el.img}</span>
                    <p>{el.name}</p>
                    <p>{el.card}</p>
                </div>)}               
            </div>
        </div>
    )
};

const mapStateToProps = state =>({
    item: state.appReducer.data
})

export default connect(mapStateToProps)(index);