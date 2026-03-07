export default function IngredientsList(props) {
  return (
    <>
      {props.ingredients.length > 0 && (
        <section className='ingredients-list'>
          <h2>Ingredients on hand:</h2>
          <ul>
            {props.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
      )
      }
      {props.ingredients.length >= 5 && (
        <section className='get-recipe'>
          <div>
            <h3>Ready for a recipe?
            </h3>
            <p>Get a recipe from your list of ingredients!</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </section>
      )}
    </>
  )
}