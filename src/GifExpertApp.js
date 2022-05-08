import React, { useState } from "react";
import ReactDOM from "react";

const GifExpertApp = ({ props }) => {

  const [categories, setCategories] = useState(['Dragon Ball', 'Evangelion', 'Full Metal Alchimist']);
  const [input, setinput] = useState("");

  const AddCategory = () => {
    setCategories([input, ...categories]);
  }

  const changeKey = (event) => {
    setinput(event.target.value);
  }

  return (<>
    <h2>Gif Expert App</h2>
    <hr></hr>
    <input name="category" placeholder="Nueva categoria" onKeyUp={changeKey}></input> <br></br>
    <button onClick={AddCategory}>Agregar Categoria</button>
    <ol>
      {
        categories.map((category) => {
          return <li key={category}>{category}</li>
        })
      }
    </ol>
  </>

  );
}

export default GifExpertApp;