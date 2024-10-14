import React from 'react';

const ContentGrid: React.FC = () => {
  const content = [
    { id: 1, type: 'story', title: 'The Midnight Whisper', author: 'E. A. Poe', genre: 'Horror' },
    { id: 2, type: 'artwork', title: 'Starry Nights', artist: 'V. van Gogh', genre: 'Impressionism' },
    { id: 3, type: 'story', title: 'Echoes of Eternity', author: 'I. Asimov', genre: 'Sci-Fi' },
    { id: 4, type: 'artwork', title: 'The Scream', artist: 'E. Munch', genre: 'Expressionism' },
    { id: 5, type: 'story', title: 'Whispers in the Wind', author: 'S. King', genre: 'Thriller' },
    { id: 6, type: 'artwork', title: 'The Persistence of Memory', artist: 'S. Dali', genre: 'Surrealism' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {content.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`https://source.unsplash.com/random/400x300?${item.type},${item.genre}`}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">
              {item.type === 'story' ? `Author: ${item.author}` : `Artist: ${item.artist}`}
            </p>
            <p className="text-sm text-gray-500">{item.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;