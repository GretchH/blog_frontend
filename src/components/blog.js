import React, { useState } from 'react';

const blogPosts = [
    {
      title: "All New 2025 GMC Terrain",
      summary: "Discover essential principles that will improve your design process and help create more user-friendly websites.",
      link: "#"
    },
    {
      title: "Should You Go EV?",
      summary: "A quick and clear explanation of closures in JavaScript with real-world use cases and code samples.",
      link: "#"
    },
    {
      "title": "CSS Grid vs Flexbox: When to Use What",
      "summary": "Both are powerful tools, but knowing when and how to use them can make your layouts cleaner and more efficient.",
      "link": "#"
    }
  ];
  
  // ✅ Function to create a blog card element
function Blog() {
    // [postsToDisplay, setPosts ] = useState([])

    // GET / READ 
    // axios.get('localhost:5000/posts')
    // .then(response => {
    //     console.log(response.data);
    //     setPosts(response.data)
    // })


    // [title, setTitle ] = useState("");
    // [summary, setSummary] = useState("");
    // [link, setLink] = useState("");

    // Function to handle form submission
    // POST / CREATE 
    // axios.post("postendpoint")

    // DELETE 
    // axios.delete("deletepoint", id) 

    // PUT / EDIT 
    // axios.put("putendpoint", id, {title, summary, link})

    

    // UI map function
    const postsToDisplay = blogPosts.map(post => {
        return (
        <div key={post.title} className="blog-card">
            <div className="blog-title">{post.title}</div>
            <div className="blog-summary">{post.summary}</div>
            {/* anchor has to be Link for navigating to component */}
            <a href={post.link} className="read-more">Read More</a>
        </div>
        )
      });

    return (
        <div className="blog-cards">
            {postsToDisplay}
        </div>

    )
    
}
export default Blog;
  
  // Append all blog cards to the container

// NOTE FOR HANDLING DATA REQUEST 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function MyComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('your-api-endpoint');
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       {data && (
//         <ul>
//           {/* Render data here */}
//           {Object.keys(data).map((key) => (
//             <li key={key}>
//               {key}: {data[key]}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MyComponent;