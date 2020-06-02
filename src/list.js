import React, { Component,PureComponent } from 'react'

export default class list extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            scrore:4,
            data:[
                {
                    id:1,
                    name:"Abhinav",
                    age:18
                },
                {
                    id:2,
                    name:"Ammu",
                    age:17
                } ,
                {
                    id:3,
                    name:"Adheena",
                    age:17
                }
            ]
        }
    }
    incr=()=>{
        this.setState({
            scrore:10
        })
        console.log(this.state.scrore)
    }
    // shouldComponentUpdate(){

    // }
    render() {
        return (
            <div>
                <button onClick={this.incr}>Increment</button>
                <h1>{this.state.scrore}</h1>
                 <ul>
                     {this.state.data.map((value,key)=>{
                         return(
                         <li key={value.id}>{value.name + " who is "+value.age+" year old"}</li>
                     )})}
                 </ul>
            </div>
        )
    }
}
