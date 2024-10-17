// import React, { useEffect } from 'react'
// import img2 from '../Assets/Images/highquality3.jpeg';
// // import {formData} from '../Pages/formData'
// import { useFormContext } from './FormContext';


// const FullBlog = () => {
//         const { formData } = useFormContext();
//         useEffect(() => {
//           console.log(formData)
         
//         }, [formData])
        
        
//   return (
//       <>
//             <div className="flex flex-col items-center p-8 bg-white">
//                 <div className='flex p-5 w-full justify-start gap-5 items-center'>
//                         <div className='h-10 w-10 rounded-full bg-black'/>
//                         <ul className='list-disc flex  ms-5 gap-x-10'>
//                                 <li>14 Oct 2024</li>
//                                 <li>7 min read</li>
//                         </ul>
                       
//                 </div>
//                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
//       <img 
//         src={img2} 
//         alt=''
//         className="absolute top-0 left-0 h-full w-full rounded-t-lg object-cover" 
//       />
//     </div>
//               <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//                 {/* Left Column: Content */}
//                 <div className="p-6 flex-1">
//                   <h1 className="text-3xl font-bold text-gray-800 mb-4">React.js: A Starter Guide</h1>
//                   <p className="text-gray-600 mb-4">
//                     Today front-end development has changed enormously, and React.js has played an important role in this journey. 
//                     Mostly known as React, it is the JavaScript library for many users opting for single-interface applications. 
//                     Developers use React to make reusable UI components and to control modern web application changes easily. 
//                     For both beginner and seasoned developers, React is an important ingredient in web development.
//                   </p>
        
//                   <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">What Exactly is React?</h2>
//                   <p className="text-gray-600 mb-4">
//                     In 2013, Facebook created React for developers, and ever since then, it has gained massive utility for its flexibility and performance. 
//                     Other web frameworks do not solely focus on the ‘view layer of the application’ (the V in MVC = Model Controller), 
//                     but React.js carries out this function singlehandedly, making it an easier pathway to other web frameworks too. 
//                     When a user interface is divided into small components, React follows the component-based architecture. 
//                     Each component handles its state and can be joined with other elements to build complex UIs.
//                   </p>
        
//                   <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Characteristics of React.js</h2>
//                   <ul className="list-disc list-inside mb-4 text-gray-600">
//                     <li><strong>Component-based Architecture:</strong> Components are the main focus of React and are independent and reusable pieces of code to form UIs.</li>
//                     <li><strong>Virtual DOM:</strong> Enhances performance by comparing the new Virtual DOM with the older one during state changes.</li>
//                     <li><strong>JSX - JavaScript XML:</strong> A syntax extension that looks similar to HTML, helping visualize the formation of React components.</li>
//                     <li><strong>Unidirectional Data Flow:</strong> Data is transferred from parent to child components, making debugging easier.</li>
//                     <li><strong>Declarative UI:</strong> Encourages defining UI states, which React handles for rendering updates.</li>
//                   </ul>
        
//                   <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">React's Component Structure</h2>
//                   <p className="text-gray-600 mb-4">
//                     There are two types of components:
//                   </p>
//                   <ul className="list-disc list-inside mb-4 text-gray-600">
//                     <li><strong>Functional Components:</strong> Can manage their state with React's useState hook and other hooks.</li>
//                     <li><strong>Class Components:</strong> Extend React.Component and have a render method, but functional components are preferred with the introduction of React hooks.</li>
//                   </ul>
        
//                   <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">State and Props in React.js</h2>
//                   <p className="text-gray-600 mb-4">
//                     Data can be managed using State and Props.
//                   </p>
//                   <ul className="list-disc list-inside mb-4 text-gray-600">
//                     <li><strong>State:</strong> Saves and stores changing data for a component, reacting to user actions or events.</li>
//                     <li><strong>Props:</strong> Properties transferred from parent to child components; props cannot be managed within the receiving components.</li>
//                   </ul>
        
//                   <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Why Choose React.js?</h2>
//                   <ul className="list-disc list-inside mb-4 text-gray-600">
//                     <li><strong>Performance:</strong> Rendering algorithms and Virtual DOM make React an efficient library.</li>
//                     <li><strong>Ecosystem and Community:</strong> Vast documentation, third-party libraries, and a large community.</li>
//                     <li><strong>Reusability:</strong> Component-based architecture allows for higher reusability and maintainability.</li>
//                     <li><strong>Flexibility:</strong> Provides developers with the ability to choose and manage tools as needed.</li>
//                   </ul>
        
//                   <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Conclusion</h2>
//                   <p className="text-gray-600 mb-4">
//                     React.js has encouraged developers to form modern web applications by defining concepts like Component-based architecture, a Virtual DOM, and a Declarative UI approach. 
//                     The attributes such as ease of use, impressive features like hooks, and an efficient ecosystem make it a better option for creating high-performing applications. 
//                     Whether you are curating your website or other applications, React.js provides the tools and flexibility to create better UIs. 
//                     React.js continues to be at the forefront as the web evolves.
//                   </p>
//                 </div>
        
              
//               </div>
              
//             </div>

// <div className="p-4 border border-gray-400 bg-white text-black rounded w-[90vw]">
// <h2 className="text-xl font-bold mb-2">{formData.title || "Default Title"}</h2>
// <div dangerouslySetInnerHTML={{ __html: formData.content }}></div>

// {/* Display Uploaded Images */}
// <div className="flex flex-col items-center p-8 bg-white">
//       <div className='flex p-5 w-full justify-start gap-5 items-center'>
//         <div className='h-10 w-10 rounded-full bg-black' />
//         <ul className='list-disc flex ms-5 gap-x-10'>
//           <li>14 Oct 2024</li>
//           <li>7 min read</li>
//         </ul>
//       </div>
//       <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
//         <img 
//           src={img2} 
//           alt='' 
//           className="absolute top-0 left-0 h-full w-full rounded-t-lg object-cover" 
//         />
//       </div>
//       <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//         <div className="p-6 flex-1">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">{formData.title || "Default Title"}</h1>
//           <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: formData.content || "<p>No content available.</p>" }}></div>
          
//           {/* Render Images */}
//           {formData.images.length > 0 && (
//             <div className="mt-4">
//               {formData.images.map((img, index) => (
//                 <img key={index} src={img} alt={`Uploaded ${index + 1}`} className="mb-4" />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
// </div>
// </>
         
//   )
// }
// export default FullBlog;











import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useLocation, useNavigate } from 'react-router-dom';

const FullBlog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Get the route state
  const navigate = useNavigate(); // For back navigation
  const { blog } = location.state; // Destructure blog from state

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  if (!blog) return null;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-10 px-5">
      <button  onClick={() => navigate(-1)} className="self-start text-blue-500 underline my-5">
        Back to Blogs
      </button>

      <div className={`w-full max-w-5xl rounded-lg shadow-lg p-6 ${darkMode ? 'bg-black/80 border' : 'bg-white'}`}>
        {/* Author info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {blog.profileImage ? (
              <img
                src={blog.profileImage}
                alt={blog.authorName}
                className={`h-12 w-12 border-2 rounded-full ${darkMode ? 'border-white' : 'border-black'}`}
              />
            ) : (
              <div
                className={`bg-[#0060b5] border-2 h-12 w-12 rounded-full flex items-center justify-center ${
                  darkMode ? 'border-white' : 'border-black'
                }`}
              >
                <span className="text-white font-bold">
                  {blog.authorName && blog.authorName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            <div className="ml-4">
              <h3 className={`font-semibold text-gray-800 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {blog.authorName}
              </h3>
              <div className={`flex items-center gap-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                <CalendarMonthIcon fontSize="small" />
                <small>{blog.date || 'Fri, Oct 11'}</small>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-gray-700 text-sm px-3 flex items-center bg-gray-200 rounded-full">
              <AccessTimeIcon sx={{ marginRight: '5px' }} />
              {blog.readTime || '5 min'}
            </span>
            <IconButton
              sx={{
                ml: 1,
                padding: '4px',
                borderRadius: '30px',
                backgroundColor: darkMode ? 'gray' : '', // Conditionally change the background color
                border: darkMode ? '2px solid white' : '2px solid black',
              }}
              onClick={handleClick}
              color="primary"
            >
              {darkMode ? <LightModeIcon sx={{ color: 'yellow' }} /> : <DarkModeIcon sx={{ color: 'black' }} />}
            </IconButton>
          </div>
        </div>

        <img src={blog.image} alt={blog.title} className="w-full h-[500px] object-cover rounded-lg mb-6" />

        {/* Blog title */}
        <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{blog.title}</h1>

        {/* Blog content */}
        <div className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-white/80' : 'text-gray-700'}`}>
          {blog.content}

          {/* Additional blog content */}
          <div className={`${darkMode ? 'text-white/90' : 'text-gray-700'}`}>
            <p className="mb-4">
              Today front-end development has changed enormously, and React.js has played an important role in this
              journey. Mostly known as React, it is the JavaScript library for many users opting for single-interface
              applications. Developers use React to make reusable UI components and to control modern web application
              changes easily. For both beginner and seasoned developers, React is an important ingredient in web
              development.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">What Exactly is React?</h2>
            <p className="mb-4">
              In 2013, Facebook created React for developers, and ever since then, it has gained massive utility for its
              flexibility and performance. Other web frameworks do not solely focus on the ‘view layer of the
              application’ (the V in MVC = Model Controller), but React.js carries out this function singlehandedly,
              making it an easier pathway to other web frameworks too. When a user interface is divided into small
              components, React follows the component-based architecture. Each component handles its state and can be
              joined with other elements to build complex UIs.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Characteristics of React.js</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Component-based Architecture:</strong> Components are the main focus of React and are
                independent and reusable pieces of code to form UIs.
              </li>
              <li>
                <strong>Virtual DOM:</strong> Enhances performance by comparing the new Virtual DOM with the older one
                during state changes.
              </li>
              <li>
                <strong>JSX - JavaScript XML:</strong> A syntax extension that looks similar to HTML, helping visualize
                the formation of React components.
              </li>
              <li>
                <strong>Unidirectional Data Flow:</strong> Data is transferred from parent to child components, making
                debugging easier.
              </li>
              <li>
                <strong>Declarative UI:</strong> Encourages defining UI states, which React handles for rendering
                updates.
              </li>
            </ul>
          </div>
        </div>

        {/* Blog stats */}
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex gap-3 items-center text-sm">
            <div className="flex items-center gap-1">
              <VisibilityIcon fontSize="small" /> {blog.views || '6173'}
            </div>
            <div className="flex items-center gap-1">
              <CommentIcon fontSize="small" /> {blog.comments || '3'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
