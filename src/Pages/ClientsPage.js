import { useEffect, useState } from "react";
import HeroSection from "../Components/common/HeroSection";
import Techclient from "../Assets/Videos/techclient.mp4";
import { clientLogos, clientTestimonials, WeOffersToClient } from "../data/ClientsData";


const ClientsPage = () => {
  const [bottomRadius, setBottomRadius] = useState("0%");
  const [scrollHeading, setScrollHeading] = useState("");
  const [value, setValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50;
      const radius = Math.min((scrollTop / maxScroll) * 50, 50);
      setBottomRadius(`${radius}%`);
      setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientTestimonials.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, clientTestimonials.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
    

      <HeroSection videoUrl={Techclient} videoOpacity={20} MarginAnimtion={true}>
        <div className='lg:w-[50vw] w-[90vw] flex justify-end items-end'>
          <div className="relative w-full md:h-80 h-96  overflow-hidden mr-2 cursor-pointer mb-16">
            <h1 className="text-[#0060b5]  text-3xl lg:text-5xl font-bold drop-shadow-xl">
              Empower Your Journey
              <span
                className="absolute bottom-0 top-4 left-0 lg:w-[40vw] w-[90vw] lg:border-b-2 border-b-4 my-9"
                style={{
                  borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                  animation: "gradientShift 6s infinite",
                }}
              ></span>
            </h1>

            <p className="md:text-2xl text-xl font-bold md:mt-4 mt-10 text-white" data-aos="fade-up">
              Redefine Your <span className="text-yellow-400">Success</span> With Innovation And Excellence.
            </p>

            <h1 className="text-2xl mt-14 italic ">
              <span className="p-3 border-white border-l-2" style={{ backgroundColor: 'rgb(0,0,0,0.5)' }}>
                Our Clients' Words
              </span>
            </h1>

            <style>
              {`
                .relative {
                  position: relative;
                }
                .absolute {
                  position: absolute;
                }
                @keyframes gradientShift {
                  0% {
                    border-image-source: linear-gradient(to right, yellow, blue);
                  }
                  100% {
                    border-image-source: linear-gradient(to right, blue, yellow);
                  }
                }
              `}
            </style>



            <div
              className="absolute w-full h-full flex transition-transform duration-1000 italic"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {clientTestimonials.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-transparent  pl-2 text-white drop-shadow-xl">


                  <p className="text-xl font-semibold mt-5">{item.review}</p>

                  <h3 className="text-xl font-semibold mt-1 text-yellow-400">
                    {item.client}
                  </h3>

                
                </div>
              ))}
            </div>

          </div>
        </div>
      </HeroSection>


    



      <div className="flex flex-col items-center justify-center py-10">
  <h2 className=" text-3xl md:text-5xl text-[#0060b5] my-6 font-semibold drop-shadow-lg"
  style={{  textShadow: '0.8px 0.8px 0 #eec317, -0.8px -0.8px 0 white, 0.8px -0.8px 0 white, -0.8px 0.8px 0 #eec317',}}>
    Our Reputed Clients
  </h2>
  <p className=" italic text-lg mb-8 text-center text-black dark:text-white">
    We partner with leading organizations to deliver world-class solutions and
    support. <br />
    <span className="text-yellow-400  text-xl">
      " Join us in shaping the future together "
    </span>
  </p>

  <div className="flex items-center justify-center dark:bg-white/20 bg-[#0060b5] md:p-10 p-5 mx-10 md:mx-0  rounded-md shadow-inner w-[95vw]">
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-20 gap-y-12 w-11/12 max-w-4xl">
      {clientLogos.map((img, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-20 p-2 border-black bg-white shadow-lg shadow-black border-2 rounded-md transition-all duration-700 ease-in-out hover:scale-110  cursor-pointer"
        >
          <img
            src={img.src}
            className={`w-auto ${img.height || ""}`}
            alt={img.alt}
            data-aos={window.innerWidth <= 768 ? "fade-up" : "fade-left"}
            data-aos-delay={img.delay}
            data-aos-duration="1500"
          />
        </div>
      ))}
    </div>
  </div>
</div>



      <div className="flex items-center justify-center mt-12">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="100"
          className=" text-[#0060b5]  text-xl md:text-5xl  font-semibold"
        >
          Redefine Your Success Story With Us
        </h1>
      </div>

      <div className="flex w-auto gap-10 justify-center mt-10">
      <div className="lg:grid-cols-3  md:grid-cols-2 grid grid-cols-1 gap-6 p-4">
        {WeOffersToClient.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col dark:bg-black/50 bg-black/80 shadow-lg gap-2 dark:p-4  p-2 group transition-transform duration-300 transform hover:scale-110 rounded-lg"
          >
            <div>
              <img
                src={item.src}
                className="w-full h-[185px] border-b-2 border-yellow-400 object-cover rounded-lg p-0 m-0 shadow-none opacity-70"
                alt={item.title}
              />
              <div className={`absolute inset-0 flex flex-col items-start justify-end p-6 rounded-lg text-white`}>
                <div
                  className="w-full p-2 rounded-md"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                >
                  <h1 className="text-xl font-bold text-yellow-400 drop-shadow-xl">
                    {item.title}
                  </h1>
                  <p className="text-sm italic drop-shadow-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    
   


    </>
  );
};

export default ClientsPage;