import { useParams } from "react-router-dom";
import data from "./../data/data.json"




function ItemDetailsPage(props) {

  const params = useParams()

  const foundTodo = props.stateData.find((todo) => { return todo.task === params.task })

  return (
    <div>
      <h1>
      Todo Details Page
      </h1>
 <div>
      
      <h4>Showing Todo Description </h4>

      <h5>Title: {foundTodo.task} </h5>
      <p>Description: {foundTodo.description} </p>
      <p>completed: {foundTodo.completed}</p>
      

      </div>

    </div>
    
  )
}
export default ItemDetailsPage