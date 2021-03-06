import React, { useState } from 'react';
//we import PropTypes
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    if (input.trim().length > 2) {

      setCategories(categories => [input, ...categories]);

      setInput('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
        name="newCategory"
        placeholder='Nueva Categoria'
        value={input}
        onChange={handleInputChange}
      ></input>

    </form>
  );
}

//asign porpTypes to the component to handle props
AddCategory.propTypes = {
  // mark setCategories as a prop type function and requires.
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
