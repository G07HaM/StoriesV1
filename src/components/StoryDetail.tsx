import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Eye, Calendar, ArrowLeft, MessageSquare } from 'lucide-react';
import Comments from './Comments';

const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API or database
  const [story, setStory] = useState({
    id: parseInt(id || '0'),
    title: 'The Midnight Whisper',
    author: 'E. A. Poe',
    genre: 'Horror',
    views: 1200,
    rating: 4.5,
    date: '2024-03-01',
    content: `The clock struck midnight, and the old mansion creaked with anticipation. Sarah, a skeptical journalist, had come to debunk the rumors of ghostly whispers that plagued the estate. As she set up her equipment in the dusty library, a chill ran down her spine.

    The candle flickered, casting eerie shadows on the walls. Sarah's recorder picked up a faint sound—a whisper so soft it could have been the wind. But there was no draft in the sealed room.
    
    "Who's there?" Sarah called out, her voice trembling despite her disbelief.
    
    The whisper grew louder, forming words she couldn't quite make out. The temperature dropped suddenly, and Sarah's breath came out in visible puffs. The recorder whirred, capturing every moment of the supernatural encounter.
    
    As the whispers reached a crescendo, books began to fly off the shelves, swirling around Sarah in a vortex of paper and leather. In the chaos, she caught glimpses of spectral figures, their faces contorted in eternal anguish.
    
    Sarah scrambled for the door, but it slammed shut before she could reach it. The whispers now thundered in her ears, revealing dark secrets of the house's past—murders, betrayals, and souls trapped between worlds.
    
    Just as suddenly as it began, everything stopped. The books fell to the floor, the temperature normalized, and silence reigned. Sarah stood frozen, her skepticism shattered.
    
    As dawn broke, Sarah stumbled out of the mansion, clutching her recorder. She knew the whispers she captured would change everything—not just her career, but the world's understanding of the supernatural.
    
    The Midnight Whisper had spoken, and Sarah would never be the same.`,
    comments: [
      { id: 1, user: 'Alice', text: 'This story gave me chills! Beautifully written.', date: '2024-03-02' },
      { id: 2, user: 'Bob', text: 'I couldn\'t stop reading. The atmosphere was so well crafted!', date: '2024-03-03' }
    ]
  });

  if (!story) {
    return <div>Story not found</div>;
  }

  const addComment = (newComment: { user: string; text: string }) => {
    const updatedComments = [
      ...story.comments,
      { id: story.comments.length + 1, ...newComment, date: new Date().toISOString().split('T')[0] }
    ];
    setStory({ ...story, comments: updatedComments });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-4">
        <ArrowLeft size={20} className="mr-1" />
        Back to Stories
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{story.title}</h1>
      <div className="mb-4">
        <p className="text-gray-600">by {story.author}</p>
        <p className="text-sm text-blue-500">{story.genre}</p>
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center">
          <Eye size={16} className="mr-1" />
          <span>{story.views}</span>
        </div>
        <div className="flex items-center">
          <Star size={16} className="mr-1 text-yellow-400" />
          <span>{story.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>{new Date(story.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <MessageSquare size={16} className="mr-1" />
          <span>{story.comments.length}</span>
        </div>
      </div>
      <div className="prose max-w-none mb-8">
        {story.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <Comments comments={story.comments} addComment={addComment} />
    </div>
  );
};

export default StoryDetail;