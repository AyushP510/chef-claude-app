import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import './styles/ChefClaudeApp.css';
import Header from './components/Header';
import IngredientForm from './components/IngredientForm';
import IngredientsList from './components/IngredientsList';
import SuggestedRecipe from './components/SuggestedRecipe';

import { getRecipeFromDeepseek } from './service/ai';

export default function ChefClaudeApp() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

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
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
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