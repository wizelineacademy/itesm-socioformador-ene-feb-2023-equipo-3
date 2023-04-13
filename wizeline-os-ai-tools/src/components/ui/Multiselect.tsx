import { FC, useState } from 'react'
import Select from "react-select";
import * as React from 'react'


interface MultiselectProps {
  
}


const Multiselect: FC<MultiselectProps> = ({}) => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];

  // Function triggered on selection
  function handleSelect(data:any) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <h2>Choose your color</h2>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}

export default Multiselect