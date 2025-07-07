import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex flex-col sm:flex-row items-center justify-between">
      <Link to="/" className="text-white font-bold text-2xl">
        Recipe Discovery
      </Link>
      <br></br>
      <Link to="/favorites" className="text-blue-600 hover:underline">
        Favorites
      </Link>
      <form onSubmit={handleSubmit} className="mt-2 sm:mt-0">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-l px-3 py-1 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-400 px-4 py-1 rounded-r hover:bg-yellow-500 transition"
        >
          Search
        </button>
      </form>
    </nav>
  );
}
