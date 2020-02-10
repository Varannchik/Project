import React from 'react';
import SomeComponent from '../../components/SomeComponent';
import Pay from '../../components/Pay';
import Block from '../../components/Block';

export default function(props){
  
  return(
    <>
      <SomeComponent title={'ЛЮБАЯ ФОРМА ОПЛАТЫ'}>
        <Pay 
          text={'Bitmain Antminer S9 - инновационная машина, в которой применены 16 nm чипы. Хешрейт модели впечатляет своей эффективностью и составляет 13.5 TH/s. За охлаждение S9 отвечают мощные вентиляторы 12038 в количестве 2-х единиц.'}  
        />      
      </SomeComponent >   
      <SomeComponent title={'НАШИ ПРЕИМУЩЕСТВА'}> <Block /></SomeComponent >
    </>
  )
}