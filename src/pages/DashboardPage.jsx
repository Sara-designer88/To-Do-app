import dataInfo from "../data/data.json";
import { useState } from "react";

function DashboardPage() {
  const [stateData, setStateData] = useState(dataInfo);
  const handleRemoveFromData =(index)=> {
    console.log("trying to remove", index )

    const clone = structuredClone(stateData)
    clone.splice(index, 1)
    setStateData(clone)

  }
  return (
    <div>
      {stateData.map((ToDo, index) => {
   
        return <li key={index} > {ToDo.task } {ToDo.completed ? "✅" : "❌"} <button onClick={() => handleRemoveFromData(index)}>Remove</button> </li>

      })}
    </div>
  );
}

export default DashboardPage;
