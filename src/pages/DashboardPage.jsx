
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from 'react-bootstrap/CloseButton';
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";


function DashboardPage(props) {
  

  const handleRemoveFromData = (index) => {
    console.log("trying to remove", index);

    const clone = structuredClone(props.stateData);
    clone.splice(index, 1);
    props.setStateData(clone);
  };




  return (
   
    <div>
       
       <AddForm stateData={props.stateData} setStateData={props.setStateData}/>

      {props.stateData.map((ToDo, index) => {
        return (
          <ListGroup key={index} horizontal > 
             <Link to={`/pages/${index}`}>
            
            <ListGroup.Item
              action
              href="#link1"
              style={{
                backgroundColor: ToDo.completed ? "rgb(18, 163, 105) " : "rgb(137, 213, 210)",
              }}
            >
              {ToDo.task}
             
            </ListGroup.Item>
            </Link>
              <button id="delete-btn" onClick={() => handleRemoveFromData(index)}>
                ❌
               </button>
          </ListGroup>
        );
      })}
    </div>
  );
}

export default DashboardPage;
