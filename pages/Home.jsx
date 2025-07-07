import { useFetch } from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data, loading, error } = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Recipe Categories</h1>
      <div>
        {data.categories.map((cat) => (
          <Link
            to={`/category/${cat.strCategory}`}
            key={cat.idCategory}
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
            />
            <div>
              <h2>{cat.strCategory}</h2>
              <p>
                {cat.strCategoryDescription.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
