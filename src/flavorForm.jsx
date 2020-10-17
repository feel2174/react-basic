import React, { useState } from 'react';

const FlavorForm = () => {
  const [value, setValue] = useState('coconut');
    
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (e) => {
    alert('Your favorite flavor is: ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FlavorForm;
