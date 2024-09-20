import React from 'react'
import RecipeReviewCard from '../Components/BlogCard'
import HeroSection from '../Components/CommonComponents/HeroSection'

import CareerVideo from '../Assets/Videos/CareerVideo.mp4'

export const Blogs = () => {
  return (
  
       
       <HeroSection videoUrl={CareerVideo}
       videoOpacity={20}
       MarginAnimtion={true}>
         
       <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--primary-color)"}}>Blogs</h1>
       
       <br/>
       <h1 className="text-xl font-bold mb-4 text-white" >
               Work in progress.....
       </h1>

       </HeroSection>
       

       

   
  )
}

 {/* <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/> */}