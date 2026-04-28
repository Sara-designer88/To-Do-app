
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
          <ListGroup>
             <Link to={`/pages/${index}`}>
            
            <ListGroup.Item
              key={index}
              action
              href="#link1"
              style={{
                backgroundColor: ToDo.completed ? "green" : "orange",
              }}
            >
              {ToDo.task}
      
              <button onClick={() => handleRemoveFromData(index)}>
                ❌
               </button>
             
            </ListGroup.Item>
            </Link>
          </ListGroup>
        );
      })}
    </div>
  );
}

export default DashboardPage;
