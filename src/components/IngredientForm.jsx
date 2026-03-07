export default function IngredientForm(props) {

  const addIngredient = (formData) => {
    if (formData.get("ingredient").trim() !== '') {
      props.setIngredients([...props.ingredients, formData.get("ingredient").trim()]);
    }
  };

  return (
    <form action={addIngredient} className='add-ingredient-form'>
      <input
        id='ingredient-input'
        name='ingredient'
        aria-label='Add ingredient'
        type='text'
        placeholder='e.g. oregano'
      />
      <button>Add ingredient</button>
    </form>
  )
}