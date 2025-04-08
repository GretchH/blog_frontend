// filepath: /Users/gretchellherman/Documents/GitHub/test/blog_frontend/src/components/About.js
import React, { useState } from 'react';

function About() {
  // Initialize state for contributors
  const [contributors, setContributors] = useState([
    { name: 'John Doe', role: 'Editor' },
    { name: 'Jane Smith', role: 'Writer' },
    { name: 'Alice Johnson', role: 'Researcher' },
  ]);

  return (
    <div>
      <h1>About This Blog</h1>
      <p>This blog is about sharing the latest news and updates.</p>
      <p>We cover a wide range of topics, including vehicle and EV technology, lifestyle, and travel.</p>

      <h2>Meet Our Contributors</h2>
      <ul>
        {contributors.map((contributor, index) => (
          <li key={index}>
            <strong>{contributor.name}</strong> - {contributor.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;


//import React from 'react';


// function About() {
//   return (
//     <div>
//       <h1>About This Blog</h1>
//       <p>This blog is about sharing the latest news and updates.</p>
//       <p>We cover a wide range of topics, including vehicle and EV technology, lifestyle, and travel.</p>
//     </div>
    
//     );
// }

// export default About;