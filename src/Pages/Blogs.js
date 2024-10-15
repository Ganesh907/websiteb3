import React, { useState } from 'react';
import { blogData } from '../utils/BlogData';
import FullBlog from './FullBlog';
import blog1 from '../Assets/Images/BlogImages/blog1.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const getInitials = (name) => {
  if (!name) return '';
  const namesArray = name.split(' ');
  return namesArray.map(n => n[0].toUpperCase()).join('');
};

const Blogs = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
    setSelectedBlog(null);
  };

  const uniqueCategories = ['All', ...new Set(blogData.map(blog => blog.category))];
  const filteredBlogs = selectedCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  return (
    <div className="flex flex-col items-center mt-20 text-black">
      {showDetail ? (
        <FullBlog blog={selectedBlog} onBack={handleBack} />
      ) : (
        <div className="w-full">
          {/* Tabs for category filtering */}
          <div className="mb-5 flex w-full justify-center space-x-4">
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-800 text-white text-lg transform scale-105'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-x-5 gap-y-8 place-items-center'>
            {filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className='rounded-lg w-[400px] hover:scale-[1.015] transition-all duration-300 cursor-pointer'
                onClick={() => handleReadMore(blog)} // Click handler to show the full blog
              >
                <div className='bg-white h-[450px] flex flex-col justify-between rounded-lg p-2'>
                  <img
                    className="w-full h-[60%] object-cover rounded-t-lg"
                    src={blog.image}
                    alt="Blog cover"
                  />
                  <div className="flex items-start -mt-5 mx-4">
                    {blog.profileImage ? (
                      <img src={blog.profileImage} alt={`${blog.authorName}'s avatar`} className='h-10 w-10 border-2 border-white rounded-full' />
                    ) : (
                      <div className='bg-[#0060b5] border-2 border-white h-10 w-10 rounded-full flex items-center justify-center'>
                        <span className='text-white font-bold'>{getInitials(blog.authorName)}</span>
                      </div>
                    )}
                    <span className="ml-auto bg-white text-xs text-gray-700 px-2 py-1 rounded-full -mt-3">
                      {blog.readTime || '5 min'}
                    </span>
                  </div>

                  <div className='h-[40%] flex justify-around rounded-b-lg flex-col w-full px-4'>
                    <div className='flex justify-between  text-gray-700 text-xs'>
                      <span className=" bg-gray-200 px-2 py-1 rounded">
                        {blog.category || 'Lifestyle'}
                      </span>
                      <span>- {blog.authorName}</span>
                    </div>
                    <div className="h-[50%] overflow-y-auto">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {blog.title || 'Streaming video way before it was cool, go dark tomorrow'}
                      </h2>
                    </div>
                    <div className="flex gap-3 items-center text-gray-600 text-sm">
                      <div className="flex items-center gap-1">
                        <VisibilityIcon fontSize="small" /> {blog.views || '6173'}
                      </div>
                      <div className="flex items-center gap-1">
                        <CommentIcon fontSize="small" /> {blog.comments || '3'}
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <CalendarMonthIcon fontSize="small" />
                        <small>{blog.date || 'Fri, Oct 11'}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;



    {/* <div className="grid md:grid-cols-3 place-items-center mx-10 grid-cols-1 gap-x-10"> 
{blogPosts.map((post) => (
  <div key={post.id} className="w-[90%] bg-white/20 p-2 rounded-lg ">
    <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 h-[450px]">
      <img
        className="w-full h-[40%] object-cover rounded-t-lg"
        src={post.coverImg}
        alt="Blog cover"
      />
      <div className="p-4 h-[60%] bg-green-300">
        <div className="flex items-start -mt-12">
          <img
            className="rounded-full border-2 border-white"
            src={post.author.avatar}
            alt={post.author.name}
            title={post.author.name}
          />
          <span className="ml-auto bg-white text-xs text-gray-700 px-2 py-1 rounded-full -mt-2">
            {post.readTime}
          </span>
        </div>
        <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mt-4">
          {post.category}
        </span>
        <div className="my-3">
          <h2 className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300">
            {post.title}
          </h2>
        </div>
        <div className="flex gap-3 items-center text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <VisibilityIcon fontSize="small" /> {post.views}
          </div>
          <div className="flex items-center gap-1">
            <CommentIcon fontSize="small" /> {post.comments}
          </div>
          <div className="ml-auto flex items-center gap-1">
            <LocationOnIcon fontSize="small" />
            <small>{post.date}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
</div> */}


{/* <div className='flex justify-center items-center h-[100vh] w-full'>
<div className='bg-white/20 p-2 rounded-lg w-[360px]'>
<div className='bg-white h-[450px] flex flex-col justify-between rounded-lg p-2'>  
<img
        className="w-full h-[40%]  object-cover rounded-t-lg"
        src={blog1}
        alt="Blog cover"
      />
      <div className="flex items-start -mt-7 mx-4">
          <img
            className="rounded-full border-2 h-14 w-14 border-white"
            src={blog2}
            alt=''
            title=''
          />
          <span className="ml-auto bg-white text-xs text-gray-700 px-2 py-1 rounded-full  -mt-1 ">
           5 min Read
          </span>
        </div>

      <div className='h-[60%] flex justify-around  rounded-b-lg flex-col w-full px-4'>
      <span className="self-start bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded "> 
    Lifestyle
  </span>
        <div className=" h-[50%] overflow-y-auto">
          <h2 className="text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors duration-300">
          Streaming video way before it was cool, go dark tomorrow
          Streaming video way before it was cool, go dark tomorrow
         
          </h2>
        </div>
        <div className="flex gap-3 items-center text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <VisibilityIcon fontSize="small" /> 6173
          </div>
          <div className="flex items-center gap-1">
            <CommentIcon fontSize="small" /> 3
          </div>
          <div className="ml-auto flex items-center gap-1">
            <LocationOnIcon fontSize="small" />
            <small>Fri, Oct 11</small>
          </div>
        </div>
        </div>
  </div>
  </div>
  </div> */}




// </>


//   );
// };

// export default Blogs;
