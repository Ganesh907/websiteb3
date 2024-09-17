import React from 'react'
import RecipeReviewCard from '../Components/BlogCard'
import HeroSection from '../Components/CommonComponents/HeroSection'

import CareerVideo from '../Assets/Videos/CareerVideo.mp4'

export const Blogs = () => {
  return (
  
       
       <HeroSection videoUrl={CareerVideo}
       videoOpacity={20}
       MarginAnimtion={true}>
          <div className=' flex h-[100vh] w-[98vw] justify-center  flex-col items-center'> 
       <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--primary-color)"}}>Blogs</h1>
       
       <br/>
       <h1 className="text-xl font-bold mb-4 text-white" >
               Work in progress.....
       </h1>
       </div>
       </HeroSection>
       

       

   
  )
}

 {/* <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/> */}