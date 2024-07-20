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
      <div className="text-gray-400 text-sm flex items-center"><svg width="20" className="mr-1" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41667 8C2.41667 7.19329 2.93513 5.70472 4.18608 4.40565C5.40721 3.13755 7.29888 2.08334 10 2.08334C12.7011 2.08334 14.5928 3.13755 15.8139 4.40565C17.0649 5.70472 17.5833 7.19329 17.5833 8C17.5833 8.80671 17.0649 10.2953 15.8139 11.5944C14.5928 12.8624 12.7011 13.9167 10 13.9167C7.29888 13.9167 5.40721 12.8624 4.18608 11.5944C2.93513 10.2953 2.41667 8.80671 2.41667 8ZM10 0.583336C6.8678 0.583336 4.5928 1.82078 3.1056 3.36519C1.64822 4.87862 0.916672 6.72338 0.916672 8C0.916672 9.27662 1.64822 11.1214 3.1056 12.6348C4.5928 14.1792 6.8678 15.4167 10 15.4167C13.1322 15.4167 15.4072 14.1792 16.8944 12.6348C18.3518 11.1214 19.0833 9.27662 19.0833 8C19.0833 6.72338 18.3518 4.87862 16.8944 3.36519C15.4072 1.82078 13.1322 0.583336 10 0.583336ZM8.24993 8C8.24993 7.0335 9.03343 6.25 9.99993 6.25C10.9664 6.25 11.7499 7.0335 11.7499 8C11.7499 8.9665 10.9664 9.75 9.99993 9.75C9.03343 9.75 8.24993 8.9665 8.24993 8ZM9.99993 4.75C8.205 4.75 6.74993 6.20508 6.74993 8C6.74993 9.79493 8.205 11.25 9.99993 11.25C11.7949 11.25 13.2499 9.79493 13.2499 8C13.2499 6.20508 11.7949 4.75 9.99993 4.75Z" fill="#7F8084"/>
      </svg>{comments} comments</div>
    </div>
  );
};

export default Post;

