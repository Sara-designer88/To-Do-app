import { useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const params = useParams();
  const foundTodo = props.stateData[params.index];

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(foundTodo.task);
  const [description, setDescription] = useState(foundTodo.description);

  const handleUpdate = () => {
    setIsEditing(false);
    const clone = structuredClone(props.stateData)
    clone[params.index].task = title
    clone[params.index].description = description
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
    <div>
      <h1>Todo Details Page</h1>

      <h4>Showing Todo Description</h4>

      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h5>Title: {title}</h5>
          <p>Description: {description}</p>
          <p>Completed: {foundTodo.completed ? "Yes" : "No"}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default ItemDetailsPage;