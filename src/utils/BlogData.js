import img1 from '../Assets/Images/ontime.jpeg'; // Example image 1
import img2 from '../Assets/Images/highquality3.jpeg'; // Example image 2
import img3 from '../Assets/Images/support.png'; // Example image 3
import blog1 from '../Assets/Images/BlogImages/blog1.jpg'
import blog2 from '../Assets/Images/BlogImages/blog2.jpg'
import blog3 from '../Assets/Images/BlogImages/blog3.jpg'

// Sample blog data organized into Consulting, Technology, and Outsourcing categories
export const blogData = [
    {
        image: blog1,
        profileImage: blog3,
        category: "Technology",
        readTime: "9 min read",
        title: "React JS: A Starter Guide.",
        authorName: "John Doe",
        date: "14 Oct. 2024",
        content: "An introduction to React JS covering its features, components, state, and props. Learn why React is a great choice for modern web development."
    },
    {
        image: blog2,
        profileImage: null,
        category: "Technology",
        readTime: "5 min read",
        title: "Understanding JavaScript Promises",
        authorName: "Jane Smith",
        date: "13 Oct. 2024",
        content: "This article explains JavaScript Promises, their usage, and how to handle asynchronous operations more effectively in your applications."
    },
    {
        image: blog3,
        profileImage: blog3,
        category: "Technology",
        readTime: "7 min read",
        title: "CSS Grid vs Flexbox",
        authorName: "Alice Johnson",
        date: "12 Oct. 2024",
        content: "A detailed comparison of CSS Grid and Flexbox, discussing their differences, when to use each, and best practices."
    },
    {
        image: blog1,
        profileImage: null,
        category: "Consulting",
        readTime: "8 min read",
        title: "Effective Strategies for Business Consulting",
        authorName: "Emily White",
        date: "11 Oct. 2024",
        content: "Explore key strategies that consultants can use to help businesses improve their performance and achieve their goals."
    },
    {
        image: blog2, 
        profileImage: null,
        category: "Outsourcing",
        readTime: "6 min read",
        title: "Benefits of Outsourcing IT Services",
        authorName: "Michael Green",
        date: "10 Oct. 2024",
        content: "Learn how outsourcing IT services can reduce costs, increase efficiency, and provide access to specialized expertise."
    },
    {
        image: blog3, 
        profileImage: null,
        category: "Consulting",
        readTime: "4 min read",
        title: "Consulting in the Digital Age",
        authorName: "Sarah Brown",
        date: "9 Oct. 2024",
        content: "An overview of how digital tools and technologies are transforming the consulting landscape."
    },
    {
        image: blog1, 
        profileImage: null,
        category: "Outsourcing",
        readTime: "5 min read",
        title: "Top Trends in Outsourcing for 2024",
        authorName: "Chris Black",
        date: "8 Oct. 2024",
        content: "This article discusses the emerging trends in outsourcing for 2024 and how businesses can adapt."
    },
    {
        image: blog1,
        profileImage: null,
        category: "Tech",
        readTime: "5 min read",
        title: "Top Trends in Outsourcing for 2024",
        authorName: "Chris Black",
        date: "8 Oct. 2024",
        content: "This article discusses the emerging trends in outsourcing for 2024 and how businesses can adapt."
    }
];


// export const blogPosts = [
//     {
//       id: 1,
//       coverImg: blog1,
//       author: {
//         avatar: "https://via.placeholder.com/50",
//         name: "Author Name",
//       },
//       readTime: "2 min Read",
//       category: "Technology",
//       title: "React JS: A Starter Guide",
//       views: "1.2k",
//       comments: 24,
//       date: "Mon, Oct 15",
//     },
//     {
//         id: 2,
//         coverImg: blog2,
//         author: {
//           avatar: "https://via.placeholder.com/50",
//           name: "Author Name",
//         },
//         readTime: "2 min Read",
//         category: "Outsourcing",
//         title: "Understanding JavaScript Promises",
//         views: "1.2k",
//         comments: 24,
//         date: "Mon, Oct 15",
//       },
//       {
//         id: 3,
//         coverImg: blog3,
//         author: {
//           avatar: "https://via.placeholder.com/50",
//           name: "Author Name",
//         },
//         readTime: "2 min Read",
//         category: "Category",
//         title: "Blog Post Title",
//         views: "1.2k",
//         comments: 24,
//         date: "Mon, Oct 15",
//       },
//     // Add more posts as needed
//   ];