import React from "react";
import Todoitem from "./Todoitem/Todoitem";
import todosData from "./todosData";
class App extends React.Component{
    constructor (){
        super()
        this.state={
            todosArray : todosData
        }
        this.handleChange=this.handleChange.bind(this)

    }
    handleChange(id){
        this.setState((prevState)=>{
            const todosArrayNew = prevState.todosArray.map((element)=>{
                if(id===element.id)
                {
                    /*I am returning a brand new object here, after
                    changing the completed property */
                   return{
                       ...element,
                       completed: !element.completed
                   }
                }
            return element
        })
    /*Returns new version of state */
    return{
        todosArray: todosArrayNew
    }
 } )
}

    render(){
    /*Turn an array of object in todosData to an array of Todoitem */
    const todosDataComponent=this.state.todosArray.map(item=>{
        return(
            <Todoitem key={item.id} item={item}
            handleChange={this.handleChange}/>
        )
    })
    return(
        <div>
            {todosDataComponent}
        </div>
    )
    }

}

export default App;