import { useEffect, useRef, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import './styles/ChefClaudeApp.css';
import Header from './components/Header';
import IngredientForm from './components/IngredientForm';
import IngredientsList from './components/IngredientsList';
import SuggestedRecipe from './components/SuggestedRecipe';

import { getRecipeFromDeepseek } from './service/ai';

export default function ChefClaudeApp() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipeSection.current !== null && recipe !== "") {
      recipeSection.current.scrollIntoView({behavior: "smooth"});
    }
  }, [recipe])
 
  const getRecipe = () => {
    setIsLoading(true);
    getRecipeFromDeepseek(ingredients).then((recipe) => {
      setRecipe(recipe);
      setIsLoading(false);
    });
  }

  return (
    <div className='chef-claude-app' style={isLoading ? {pointerEvents: "none", opacity: "0.5"} : {}}>
      <Header />

      <div className='body'>
        <IngredientForm
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />
        <RotatingLines
          visible={isLoading}
          height="96"
          width="96"
          color="#D17557"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperClass="loading-spinner"
        />
        {recipe && <SuggestedRecipe recipe={recipe} />}
      </div>
    </div>
  )
}