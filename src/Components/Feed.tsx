import React, { useState, useEffect, useRef } from 'react';
import Post from './Posts';
import Signup from './Signup';
import Login from './Login';


const Feed: React.FC = () => {
  const [highlight, setHighlight] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const feedRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the feed and overlay
      if (showLogin || showSignup) {
        
          return; // Clicked inside the overlay, do nothing
        
      }
    if (
      feedRef.current &&
      event.target instanceof HTMLElement &&
      !feedRef.current.contains(event.target)
    ) {
      setHighlight(true);

      setTimeout(() => {
        setHighlight(false);
      }, 500);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [showLogin,showSignup]);

  const handlePostClick = () => {
    setShowSignup(true);
  };
  return (
        <div className={`flex justify-center items-center min-h-screen bg-[#131319] pl-8 pr-8 pb-8 pt-[100px] text-white `}>
          <div className="w-full max-w-3xl">
            <h1 className="text-3xl mb-4">Hello Jane</h1>
            <p className="text-gray-400 mb-8 text-lg w-[600px]">How are you doing today? Would you like to share something with the community 🫶</p>
    <div className={`feeds-container `}>
      <div ref={feedRef} className="feed">
            <div className={`bg-[#27292D] p-6 rounded-lg shadow-lg mb-8 border-2 border-gray-600  ${highlight ? 'highlight' : ''}`} onClick={handlePostClick}>
              <h2 className="text-xl mb-4">Create post</h2>
              <div className={`bg-[#131319] p-4 rounded-lg flex items-center ${highlight ? 'highlight' : ''}`}>
                <div className={`bg-[#27292D] text-lg mr-4 p-2 rounded-3xl ${highlight ? 'highlight' : ''}`}>
                  <div>💬</div>
                </div>
                <input
                  type="text"
                  placeholder="How are you feeling today?"
                  className={`bg-[#131319] text-white w-full border-none focus:outline-none ${highlight ? 'highlight' : ''}`}
                />
              </div>
              <div className='flex mt-3 justify-end w-auto'>
                <button className="bg-[#4A96FF] hover:bg-blue-600 w-[110px] font-semibold text-white py-2 px-4 rounded ml-4 text-lg">Post</button>
              </div>
            </div>
            <Post
              highlight={highlight}
              onClick={handlePostClick} // Pass the click handler to Post
              name="Theresa Webb"
              time="5mins ago"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              comments={24}
              emoji="👋"
              avatar="https://randomuser.me/api/portraits/women/68.jpg"
              />
            <Post
              highlight={highlight}
              onClick={handlePostClick} // Pass the click handler to Post
              name="Marvin McKinney"
              time="8mins ago"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              comments={12}
              emoji="😞"
              avatar="https://randomuser.me/api/portraits/men/44.jpg"
            />
          </div>
        </div>
      </div>
      {showSignup && (
        <div className="login-overlay">
          <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin}/>
          
          <button onClick={() => setShowSignup(false)} className="absolute top-[100px] right-[480px] text-white py-1 px-3 text-lg bg-black rounded-3xl">x</button>
        </div>
      )}
      {showLogin && (
        <div className="login-overlay">
          <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      
      <button onClick={() => setShowLogin(false)} className="absolute top-[130px] right-[470px] text-white py-1 px-3 text-lg bg-black rounded-3xl">x</button>
        </div>
      )}
      
    </div>
  );
};


export default Feed;
