import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit } ) {
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')

  function handleNewItemChange(event){
    setItemName(event.target.value)
  }

  function handleNewCategoryChange(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem)
}

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNewItemChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleNewCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
