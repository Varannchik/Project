import React, { Component } from 'react';
import styles from './styles.module.scss';
import RowCheck from './RowCheck'

const row=[
    { 
        "id":"checkbox1",
        "title":"Сформировать эмоциональную привязанность с ребенком"
    },
    { 
        "id":"checkbox2",
        "title":"Объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье"
    },
    { 
        "id":"checkbox3",
        "title":"Сформировать эмоциональную привязанность с ребенком, объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье. Сформировать эмоциональную привязанность с ребенком, объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье.Сформировать эмоциональную привязанность с ребенком."
    },
    { 
        "id":"checkbox4",
        "title":"Объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье"
    },
    
]

export default class extends Component{

    render(){
        return(           
            <form action="#" class={styles.form}>                            
                <ol class={styles.ol}>
                    {row.map((el)=>{return <RowCheck id={el.id} title={el.title}/>})}
                </ol>
            </form>                   
        )
    }
}