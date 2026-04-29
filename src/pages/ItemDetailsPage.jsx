import { use, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const params = useParams();
  const foundTodo = props.stateData[params.index];

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(foundTodo.task);
  const [description, setDescription] = useState(foundTodo.description);
 const [checked,setChecked]=useState(foundTodo.completed)

  const handleUpdate = () => {
    setIsEditing(false);
    const clone = structuredClone(props.stateData)
    clone[params.index].task = title
    clone[params.index].description = description
    clone[params.index].completed = checked
    props.setStateData(clone) 
    console.log(clone[params.index])
  };
  
  /*
  1. clone the original Array
  2. call that specific 
  3.index and edit that
  4. update the states via the setState 
  */


  return (
    <div className="container">
      <h1 >Todo Details Page</h1>

   

      {isEditing ? (
        <div className="edit-form">
          <label htmlFor="title">Title: </label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <label htmlFor="description">Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
          <label htmlFor="checked"> completed </label>
          <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              name="checked"
            />
          <button id="save-button" onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className="todo-details">
          <p><h5> Title: {title}</h5></p>
          <p><b> Description: </b>{description}</p>
          <p><b> Completed: </b>{foundTodo.completed ? "Yes" : "No"}</p>
          <button id="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ItemDetailsPage;