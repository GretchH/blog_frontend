// filepath: /Users/gretchellherman/Documents/GitHub/test/blog_frontend/src/App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import Blog from './components/blog';


function App() {
   return (
      <div className="App">
         <h1>Welcome To My Blog</h1>
         <p>All About Cars and the Automotive Industry</p>
         {/* <Home /> */}
         <Blog />
      </div>
   );
}


export default App;




