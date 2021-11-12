import { buildQueries } from "@testing-library/react";
import React from "react";
import todosData from "../todosData";
function Todoitem(props){
    let color_obj ={ 
        fontStyle: "italic",
        color : "#cdcdcd",
textDecoration : "line-through"} 
    return(

        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.completed} 
            /*We cannot pass this props.handleChange directly as by default event 
            has an event object passed in, but we have to pass id in handleChange, 
            so we do it the following way: */
           /*<onChange={props.handleChange}*/
           onChange={(event)=> props.handleChange(props.item.id)}
           /*Anytime a checkbox is clicked,onChange event is called 
           that calls handleChange and props.item.id is passed to
           know the id of the element that is clicked */
           />
          {props.item.completed?<p style= {color_obj}>{props.item.text}</p>:<p>{props.item.text}</p>}
        </div>
        

    )

}
export default Todoitem;