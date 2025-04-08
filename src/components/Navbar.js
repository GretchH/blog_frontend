import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const nav = document.createElement("nav");
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/blog" style={{ marginRight: '1rem' }}>blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
  

export default Navbar;





// export default Navbar;

// export function createNavbar() {
//   const nav = document.createElement("nav");
//   nav.innerHTML = `
//     <style>
//       nav {
//         background-color: #333;
//         padding: 10px;
//       }
//       nav a {
//         color: white;
//         margin-right: 15px;
//         text-decoration: none;
//         font-weight: bold;
//       }
//       nav a:hover {
//         text-decoration: underline;
//       }
//     </style>
//     <a href="index.html">Home</a>
//     <a href="about.html">About</a>
//     <a href="contact.html">Contact</a>
//   `;
//   return nav;
// }