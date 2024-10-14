import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const genres = [
    'Romance', 'Mystery', 'Sci-Fi', 'Fantasy', 'Horror', 'Thriller',
    'Contemporary', 'Historical Fiction', 'Poetry', 'Non-Fiction'
  ];

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Genres</h2>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <ul>
          {genres.map((genre, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-gray-600 hover:text-blue-500">{genre}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;