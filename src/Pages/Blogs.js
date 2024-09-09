import React from 'react'
import RecipeReviewCard from '../Components/BlogCard'

export const Blogs = () => {
  return (
    <div className=''> 
        <div
  className="m-4 border-4 border-black rounded-lg flex justify-center h-[100vh] gap-10 bg-red-200 items-center"
  style={{
//     backgroundColor: "var(--background-color)",
    color: "var(--primary-color)",
  }}
>
        {/* <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--primary-color)"}}>Blogs</h1>
       
        <br/>
        <h1 className="text-xl font-bold mb-4" style={{ color: "var(--secondary-color)",}}>
                Work in progress.....
        </h1> */}

        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>

</div>
    </div>
  )
}
