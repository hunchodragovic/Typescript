import { useState } from "react"

const Count = () => {
    const initialState = {firstName:"huncho",lastName:"dragovic"}
    const  [fullName,setFullName] = useState(initialState) ;
    
    function changeLastName(prev) {
        setFullName({...prev,lastName:"Ait Yahiatene"});
    }
  return (
    <div>
      <button onClick={changeLastName}>Change Name</button>
      <button onClick={() => {
       setFullName(initialState)
      }}>Reset</button>
      <h1>First Name : {fullName.firstName}</h1>
      <h1>Last name : {fullName.lastName}</h1>
    </div>
  )
}

export default Count
