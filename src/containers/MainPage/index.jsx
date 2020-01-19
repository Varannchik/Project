import React from 'react';
import styles from './styles.module.scss';
import Header from '../../components/Header'
import MainContent from '../../components/MainContent'
import Breadcrumbs from '../../components/Breadcrumbs'
import WrapSlide from '../../components/WrapSlide'
import FormRow from '../../components/FormRow'
import What from '../../components/What'

const title=[
    {
      'name':'Задачи модуля'
    },
    {
      'name':'Проработать'
    },
    {
      'name':'Дополнительные задания'
    },
    {
      'name':'Что проверить?'
    },
    {
      'name':'Обратить внимание'
    },
    {
      'name':'Частые вопросы'
    }
  ]
const what=[
  {
    "title":"Крупная моторика"
  },
  {
    "title":"Координация движений"
  },
  {
    "title":"Коммуникация"
  },
  {
    "title":"Органы чувств и поведение в игре"
  }
]

export default function(){
  
  return(
    
    <> 
      <Header/> 
      <MainContent/>
      <Breadcrumbs/>    
      <WrapSlide name={title[0].name}><FormRow/></WrapSlide>  
      <section class={styles.bg_gray}> 
        <WrapSlide name={title[1].name}></WrapSlide>
      </section>
      <WrapSlide name={title[2].name}></WrapSlide> 
      <section class={styles.bg_gray}> 
        <WrapSlide name={title[3].name}>
          <What title={what[0].title}/>
          <What title={what[1].title}/>
          <What title={what[2].title}/>
          <What title={what[3].title}/>
        </WrapSlide> 
      </section>
      <WrapSlide name={title[4].name}></WrapSlide>
        
    </>
  )
}