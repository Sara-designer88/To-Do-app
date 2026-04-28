import dataInfo from "../data/data.json";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from 'react-bootstrap/CloseButton';
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";


function DashboardPage() {
  
  const [stateData, setStateData] = useState(dataInfo);
  const handleRemoveFromData = (index) => {
    console.log("trying to remove", index);

    const clone = structuredClone(stateData);
    clone.splice(index, 1);
    setStateData(clone);
  };




  return (
   
    <div>
       
       <AddForm stateData={stateData} setStateData={setStateData}/>

      {stateData.map((ToDo, index) => {
        return (
          <ListGroup>
             <Link to={`/pages/${ToDo.task}`}>
            
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
