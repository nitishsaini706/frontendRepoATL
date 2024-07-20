import React from 'react';
import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup';
import Feed from './Components/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
     
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feed" element={<Feed />} />
          
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </Router>
  );

}

export default App;
