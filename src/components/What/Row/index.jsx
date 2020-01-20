import React from 'react';
import styles from './styles.module.scss';

function RowFun (props){
    
    return (        
        <label className={styles.block}>
            <input type="checkbox" />
            <div className={styles.text_block}>{props.title}</div>
        </label>
    )
}
RowFun.defaultProps={
   
    title:'xxx',
}
export default RowFun;