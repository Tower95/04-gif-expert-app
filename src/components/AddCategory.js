import React,{useState} from 'react';

const AddCategory = () => {

  const [input, setInput] = useState("");

  const handleInputChange = (e)=>{
    console.log(e.target.value);
    setInput(e.target.value );
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submit done",e);
  }

  console.log(input);
  return (
    <form onSubmit={handleSubmit}>

     <input type="text" 
            name="newCategory"
            placeholder='Nueva Categoria' 
            value={input}
            onChange ={handleInputChange}
            ></input>
    </form>
  );
}

export default AddCategory
