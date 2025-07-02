import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  return (
    <FavoritesProvider>
      <h1>Welcome to My Recipes!</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}
