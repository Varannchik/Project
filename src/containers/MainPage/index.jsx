import React from 'react';
import styles from './styles.module.scss';
import Header from '../../components/Header'
import MainContent from '../../components/MainContent'
import Breadcrumbs from '../../components/Breadcrumbs'
import WrapSlide from '../../components/WrapSlide'

export default function(){
  return(
    <> 
      <Header/> 
      <MainContent/>
      <Breadcrumbs/>    
      <WrapSlide/>  
      <section class={styles.bg_gray}> <WrapSlide/> ></section>  
    </>
  )
}