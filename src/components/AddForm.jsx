import { useState } from "react"
import ItemDetailsPage from "../pages/ItemDetailsPage"

function AddForm(props) {
 const [todoInputValue, setTodoInputValue] = useState("")
  const [todoDescriptionInputValue, setTodoDescriptionInputValue] = useState("")
  const [todoIdInputValue, setTodoIdInputValue] = useState("")

  const handleTodoChange = (event) => {
    console.log("user typing something")
    setTodoInputValue(event.target.value)
  }

   const handleTodoDescriptionChange = (event) => {
    console.log("user typing something")
    setTodoDescriptionInputValue(event.target.value)
  }

  const handleTodoIdChange = (event) => {
    console.log("user typing something")
    setTodoIdInputValue(event.target.value)
  }
  
    const addNewTodo = (event) => {
    event.preventDefault() 

   
    const newTodo = {
      task: todoInputValue,
      description:todoDescriptionInputValue,
      completed: false,
      id: todoIdInputValue
    }
    console.log(newTodo)
   
    const clone = structuredClone(props.stateData)
    clone.push(newTodo)
    props.setStateData(clone)
    console.log(clone)
    
    // 3.clean the inputs
    setTodoInputValue("")
    setTodoDescriptionInputValue("")
   
  }


  return (
    <div className="add-form container">
      
      <h2>Add New Todo </h2>

      <form>

        <div>
          <label htmlFor="name"> Todo title: </label>
          <input onChange={handleTodoChange} value={todoInputValue} type="text" name="name"/>
          <br/>
          <label htmlFor="name"> Todo Description: </label>
          <input onChange={handleTodoDescriptionChange} value={todoDescriptionInputValue} type="text" name="name"/>
          <br/>
          </div>


        <button onClick={addNewTodo}>Add</button>

      </form>

    </div>
  )
}
export default AddForm