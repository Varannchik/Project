import React from 'react';
import styles from './styles.module.scss';

function ArtFun (props){
    console.log(props)
    return (
        <li className={styles.li} key={`${props.title}_{props.body}`}>
            <h2 className={styles.h2}>{props.title}</h2>
            <p>{props.content}</p>
        </li>
    )
}
ArtFun.defaultProps={
    id:'undefined',
    title:'xxx',
    content:"comming",


}
export default ArtFun;
