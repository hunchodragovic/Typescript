import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("huncho");
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // Handle button click to update the name state
  function handleButtonClick() {
    setName(inputValue);
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button onClick={handleButtonClick}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Form;
