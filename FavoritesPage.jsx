import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (favorites.length === 0) {
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchFavorites = async () => {
      try {
        const responses = await Promise.all(
          favorites.map((id) =>
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
              .then((res) => res.json())
              .then((data) => data.meals?.[0])
          )
        );
        setRecipes(responses.filter(Boolean));
      } catch (err) {
        setError('Failed to load favorite recipes');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-white text-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Favorite Recipes</h1>
      {recipes.length === 0 ? (
        <p>You have no favorite recipes. Start exploring!</p>
      ) : (
        <div className="grid-3x3">
  {recipes.map((meal) => (
    <RecipeCard key={meal.idMeal} meal={meal} />
  ))}
</div>

      )}
    </div>
  );
}
