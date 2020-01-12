import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types'

function UserFun (props){
    console.log(props)
    return (
        <li  className={styles.li} key={`${props.id}_{props.body}`}>
            <h2 className={styles.h2}>{props.name}</h2>
            <p>{props.username}</p>
            <p>{props.email}</p>
        </li>
    )
}

UserFun.defaultProps={
    id:'undefined',
    name:'xxx',
    username:"namename",
    email:'qweqwe@qwe.qwe'
}

UserFun.propTypes={
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
}

export default UserFun;