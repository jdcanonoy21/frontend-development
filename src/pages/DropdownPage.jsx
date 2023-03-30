import { useState } from "react";
import Dropdown from "./../components/Dropdown";

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (option) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
  ];

  return (
    <div>
      <Dropdown options={options} onChange={handleSelected} value={selected} />
    </div>
  );
};

export default DropdownPage;
