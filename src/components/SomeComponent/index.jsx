import React , {useState} from 'react';
import styles from './styles.module.scss';
import Button from '../../components/Button';

export default function (props){   
    return (
      <div className={styles.container}>
        <div clasName={styles.title}>{props.title}</div>
          {props.children}
          <Button/>
      </div>
    )
  
};
