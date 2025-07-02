import { Link } from 'react-router-dom';

export default function RecipeCard({ meal }) {
  return (
    <Link
      to={`/recipe/${meal.idMeal}`}
      className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
      </div>
    </Link>
  );
}
