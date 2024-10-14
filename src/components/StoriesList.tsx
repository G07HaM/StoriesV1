import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, Calendar, MessageSquare, Tag } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  brief: string;
  author: string;
  genre: string;
  views: number;
  rating: number;
  comments: number;
  date: string;
  tags: string[];
}

interface StoriesListProps {
  searchTerm?: string;
}

const StoriesList: React.FC<StoriesListProps> = ({ searchTerm = '' }) => {
  const allStories: Story[] = [
    { 
      id: 1, 
      title: 'The Midnight Whisper', 
      brief: `A chilling tale of secrets that come alive when the clock strikes twelve.`,
      author: 'E. A. Poe', 
      genre: 'Horror', 
      views: 1200, 
      rating: 4.5,
      comments: 2,
      date: '2024-03-01',
      tags: ['ghost', 'suspense', 'haunted house']
    },
    { 
      id: 3, 
      title: 'Echoes of Eternity', 
      brief: `An epic journey through time and space that questions the very nature of existence.`,
      author: 'I. Asimov', 
      genre: 'Sci-Fi', 
      views: 980, 
      rating: 4.2,
      comments: 5,
      date: '2024-02-28',
      tags: ['time travel', 'space', 'philosophy']
    },
    { 
      id: 5, 
      title: 'Whispers in the Wind', 
      brief: `A small town's dark past resurfaces, bringing terror on the breeze.`,
      author: 'S. King', 
      genre: 'Thriller', 
      views: 1500, 
      rating: 4.7,
      comments: 8,
      date: '2024-02-25',
      tags: ['small town', 'secrets', 'supernatural']
    },
    { 
      id: 7, 
      title: 'The Last Serenade', 
      brief: `A bittersweet symphony of love and loss in the roaring twenties.`,
      author: 'F. Scott Fitzgerald', 
      genre: 'Romance', 
      views: 850, 
      rating: 4.0,
      comments: 3,
      date: '2024-02-20',
      tags: ['1920s', 'jazz', 'heartbreak']
    },
    { 
      id: 8, 
      title: 'Shadows of Yesterday', 
      brief: `A detective's race against time to solve a murder that echoes through decades.`,
      author: 'A. Christie', 
      genre: 'Mystery', 
      views: 1100, 
      rating: 4.3,
      comments: 6,
      date: '2024-02-15',
      tags: ['detective', 'cold case', 'twist']
    },
    { 
      id: 9, 
      title: 'Beyond the Horizon', 
      brief: `A magical quest that blurs the lines between reality and imagination.`,
      author: 'U. K. Le Guin', 
      genre: 'Fantasy', 
      views: 1300, 
      rating: 4.6,
      comments: 4,
      date: '2024-02-10',
      tags: ['magic', 'quest', 'parallel worlds']
    },
  ];

  const filteredStories = allStories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.brief.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {filteredStories.map((story) => (
        <Link to={`/story/${story.id}`} key={story.id} className="block border-b border-gray-200 pb-4 last:border-b-0 hover:bg-gray-50 transition duration-150 ease-in-out">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{story.title}</h3>
          <p className="text-sm text-gray-600 mb-2 italic">{story.brief}</p>
          <p className="text-gray-600 mb-1">by {story.author}</p>
          <p className="text-sm text-blue-500 mb-2">{story.genre}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {story.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Eye size={16} className="mr-1" />
              <span>{story.views}</span>
            </div>
            <div className="flex items-center">
              <Star size={16} className="mr-1 text-yellow-400" />
              <span>{story.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare size={16} className="mr-1" />
              <span>{story.comments}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{new Date(story.date).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StoriesList;