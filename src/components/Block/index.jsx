import React , {useState} from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';

export function block(props){   
    return (
        <div>
            <div className={styles.itemlist}>
                {props.blocks.map(el=><div className={styles.someitem}> 
                    <span>{el.img}</span>
                    <p>{el.name}</p>
                    <p>{el.text}</p>
                </div>)}               
            </div>
        </div>
    )
};

const mapStateToProps = state =>({
    blocks: state.appReducer.blocks
})

export default connect(mapStateToProps)(block);