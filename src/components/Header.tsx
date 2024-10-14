import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, Search, User, LogOut, PlusCircle } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  user: { name: string } | null;
  signOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, user, signOut }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold">CreativeNexus</Link>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </button>
          </form>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center">
                <PlusCircle size={20} className="mr-2" />
                Create
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <User size={24} className="text-gray-600" />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <button
                    onClick={signOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut size={18} className="inline mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/signin" className="text-blue-500 hover:text-blue-600">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;