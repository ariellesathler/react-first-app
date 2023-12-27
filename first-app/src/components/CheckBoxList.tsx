import React, { useState, useEffect } from 'react';

// Define the type for the state
type CheckedItems = {
  [key: string]: boolean;
};

const CheckBoxList: React.FC = () => {
  // State to manage the checked items
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  // Dummy data for the list
  const items: string[] = ['Arielle', 'Item 2', 'Item 3', 'Item 4'];

  useEffect(()=>{
    console.log('effect')
  }, [checkedItems]);

  // Handle checkbox change
  const handleCheckboxChange = (itemName: string) => {
    setCheckedItems({
     ...checkedItems,
    [itemName]: !checkedItems[itemName]
    }); 
  };

  const logCheckedItems = () => {
    console.log('Checked Items:');
    Object.keys(checkedItems).forEach((key) => {
      console.log(`${key}: ${checkedItems[key]}`);
    });
    console.log(Object.keys(checkedItems).filter((a)=> a === "Arielle"));
  };

  return (
    <>
    <div>
      <h2>Checkbox List</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <input
              type="checkbox"
              id={item}
              checked={checkedItems[item]}
              onChange={() => handleCheckboxChange(item)}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
    <button onClick={logCheckedItems}>Log Checked Items</button>

    {/* <div>
      <h2>Checkbox Response</h2>
      <ul>
        {Object.keys(checkedItems).map((item) => (
          <li key={item}>            
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div> */}
    </>
  );
};

export default CheckBoxList;
