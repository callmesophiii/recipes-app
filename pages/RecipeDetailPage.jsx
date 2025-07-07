import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { useFavorites } from '../context/FavoritesContext';

export default function RecipeDetailPage() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data?.meals) return <p className="text-center mt-10">Recipe not found.</p>;

  const meal = data.meals[0];
  const favorite = isFavorite(meal.idMeal);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

 return (
  <div className="detail-container">
    <h1 className="recipe-title">{meal.strMeal}</h1>
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal}
      className="recipe-image"
    />

    <button
      onClick={() =>
        favorite ? removeFavorite(meal.idMeal) : addFavorite(meal.idMeal)
      }
      className={`favorite-button ${favorite ? 'remove' : 'add'}`}
    >
      {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>

    <p className="recipe-meta"><strong>Category:</strong> {meal.strCategory}</p>
    <p className="recipe-meta"><strong>Area:</strong> {meal.strArea}</p>

    <h2 className="section-heading">Ingredients</h2>
    <ul className="ingredient-list">
      {ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h2 className="section-heading">Instructions</h2>
    <p className="instructions">{meal.strInstructions}</p>
  </div>
);
}