import React, { useState } from "react";
import ReactDOM from "react";

import AddCategory from "./components/AddCategory";

const GifExpertApp = ( ) => {

  const [categories, setCategories] = useState(['Dragon Ball', 'Evangelion', 'Full Metal Alchimist']);
  const [input, setinput] = useState("");


  return (<>
    <h2>Gif Expert App</h2>
    <AddCategory setCategories = {setCategories} />
    <hr />
    
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
