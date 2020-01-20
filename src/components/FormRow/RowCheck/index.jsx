import React from 'react';
import styles from './styles.module.scss';

function RowFun (props){
    
    return (
        <li key={`${props.title}_{props.body}`} class={styles.li}>
            <div class={styles.content_list}>
                <input type="checkbox" class="checkbox" id={props.id}/>
                <label for={props.id}>{props.title}</label>                                
            </div>   
        </li>
    )
}
RowFun.defaultProps={
    id:'undefined',
    title:'xxx',
}
export default RowFun;