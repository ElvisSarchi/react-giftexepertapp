import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import GifGrid from "./GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategorias([,...categorias]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
     
      <ol>
        {categorias.map((cat) => (
          <GifGrid key ={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};
