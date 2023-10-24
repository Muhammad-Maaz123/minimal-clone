import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name submitted: ', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="text" onChange={handleInputChange} /><br/>
      <input name="password" type='password' />
      <button type="submit">Enter</button>
    </form>
  );
}

export default Form;
