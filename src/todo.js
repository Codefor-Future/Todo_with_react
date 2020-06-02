import React, { Component } from 'react'
import "./todo.css"

class todo extends Component {

    state={
        inputText:"",
        todos:[]
    }
    changeText=(e)=>{
        this.setState({
            inputText:e.target.value
        })
        
    }
    store=(e)=>{
        if(e.keyCode===13){
        this.setState({
            todos:[...this.state.todos, this.state.inputText]
        })
        e.target.value=""
        
        }
        
    }
    deleteTodo=(index)=>{
        this.setState({
            todos:this.state.todos.filter((data,key)=>index!==key)
        })
    }
    render() {
        return (
            <div className="todo-cont">
                <div className="round"></div>
                <div className="round2"></div>
                <h1>Todo</h1>
                <div>
                    <input name="text_input" type="text" onChange={this.changeText} onKeyUp={this.store} placeholder="Task.."/>
                </div>
                <ul type="none">
                    {
                        this.state.todos.map((data,index)=>{
                            return(
                                <li key={index}>
                                    <div className="todo">{data}</div>
                                    <div className="del"><i class="far fa-trash-alt" onClick={()=>this.deleteTodo(index)}></i></div>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default todo