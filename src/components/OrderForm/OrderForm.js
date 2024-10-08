import {useEffect, useState} from "react";

function OrderForm(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients, ] = useState([]);


  async function cardPost() {
      console.log('name', name, 'ing', ingredients)
      const  dataPost={
          method:'post',
          body: {"name": name, "ingredients": ingredients}
      };
      const response = await fetch('http://localhost:3001/api/v1/orders', dataPost);
      const data = await response.json();
      clearInputs()
  }

  useEffect(() => {


  }, [ingredients]);

  function handleSubmit(e) {
    if (name !== '' && ingredients.length > 0) {
      console.log('setName', name, 'ing', ingredients);
        cardPost()

      clearInputs();
    } else {
      alert('You need a name and at least one ingredient')
    }
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  function saveName() {
    setName(document.getElementById("nameInput").value)
  };

  function saveIngredients(item) {
    const holder = [];
    holder.push(ingredients)
    holder.push(item)
    setIngredients(holder)
  }


  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
        <button
            key={ingredient}
            name={ingredient}
            onClick={(e) => {
              e.preventDefault()
              saveIngredients(ingredient)
            }}
        >
          {ingredient}
        </button>
    );
  });

  return (
      <form>
        <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            id="nameInput"
            onChange={(e) => {
              e.preventDefault()
              saveName()
            } }/>

        {ingredientButtons}

        <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

        <button onClick={(e) => {
          e.preventDefault()
          handleSubmit(e)
        }}>Submit Order</button>
      </form>
  );
}

export default OrderForm;
