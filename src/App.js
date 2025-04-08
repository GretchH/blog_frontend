// filepath: /Users/gretchellherman/Documents/GitHub/test/blog_frontend/src/App.js
import React from 'react';
import './App.css';
import Blog from './components/blog';
import About from './About';


function App() {
   return (
      <div className="App">
         <h1>Welcome To My Blog</h1>
         {/* <Home /> */}
         <Blog />
      </div>
   );
}


export default App;




