import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const { data, loading, error } = useFetch(
    query.trim()
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : null
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search results for "{query}"</h1>
      {!data?.meals || data.meals.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
