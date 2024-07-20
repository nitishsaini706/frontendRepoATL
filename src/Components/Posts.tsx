import React from 'react';

interface PostProps {
  name: string;
  time: string;
  content: string;
  comments: number;
  emoji: string;
  avatar: string;
  highlight: boolean;
  onClick: () => void;
}

const Post: React.FC<PostProps> = ({ highlight,name, time, content, comments, emoji, avatar,onClick }) => {
  return (
    <div className={`bg-[#27292D] p-6 rounded-lg shadow-lg mb-4 ${highlight ? 'highlight' : ''}`} onClick={onClick}>
      <div className={` ${highlight ? 'highlight' : ''} flex items-center mb-4`}>
        <img src={avatar} alt={`${name}'s avatar`} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{time}</p>
        </div>
        <div className="ml-auto text-white cursor-pointer text-3xl">...</div>
      </div>
      <div className={`flex items-start  mb-6 bg-[#131319] p-4 w-auto rounded-xl ${highlight ? 'highlight' : ''}`}>
        <div className="text-xlg bg-[#27292D] p-3 rounded-3xl "><div>
        {emoji}</div></div>
        <p className="text-gray-400 text-lg ml-5 ">{content}</p>
      </div>
      <div className="text-gray-400 text-sm">{comments} comments</div>
    </div>
  );
};

export default Post;
