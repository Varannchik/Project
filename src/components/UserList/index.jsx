import React, { Component } from 'react';


export default class extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     value:{
        //         a:''
        //     }           
        // }
        this.state = {
            value:''   
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        // this.setState({value:{a:''}: event.target.value.a});
        this.setState({value: event.target.value});
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     // if(Number(nextState.value) >10){
    //     //     return false
    //     // }else{
    //     //     return true
    //     // }
    //     if(nextProps.value===this.state.value){
    //         return false
    //     }
    // }

    render(){
        // console.log(this.state.value.a);
        console.log(this.state.value);
        return (
            <div>
                {/* <input type="text" value={this.state.value.a} onChange={this.handleChange}/>
                <div>{this.state.value.a}</div> */}

                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <div>{this.state.value}</div>
            </div>        
        )
    }
    
}