import { promises } from "../../utils/TechHomePromises";

const PromiseCardsContainer = ({ cardDataArray }) => {
        return (
<>
          <h1 className=" text-center py-10  uppercase text-white font-bold text-2xl md:text-5xl  m-[5px] font-montserrat "
          style={{
                                 
            fontFamily: 'Goudy Old Style' ,
              letterSpacing: '0.05em'            
          }}>
            Our Promise
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24  mx-5 md:mx-20">
            {promises.map((cardData, index) => (
              <PromiseCards key={index} cardData={cardData} />
            ))}
          </div>
          </>
        );
      };
      
      const PromiseCards = ({ cardData }) => {
        return (
          <div
            className={`border-2 rounded-[10px] hover:rounded-none ${cardData.bgColor} md:w-[100%] md:h-[530px] h-[510px] p-4 ${cardData.borderColor} transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent hover:border-t-transparent scale-90`}
            style={{ perspective: "1000px" }}
          >
            <style jsx>{`
              .rotate-y-360 {
                transform: rotateY(0deg);
                transition: transform 0.5s;
                transform-style: preserve-3d;
              }
              .group:hover .rotate-y-360 {
                transform: rotateY(360deg);
              }
            `}</style>
            <div>
              <div className="flex justify-between items-center">
                <div className="relative w-[100px] h-[100px]">
                  <div className="absolute inset-0 rotate-y-360">
                    <img
                      src={cardData.imageSrc}
                      className={`w-24 h-24 p-2 mt-1 object-cover ${cardData.imgBorderStyle}`}
                    />
                  </div>
                </div>
                <h1
                  className={`text-6xl font-bold ${cardData.textColor} bg-clip-text text-transparent`}
                  style={{ WebkitTextStroke: `2px ${cardData.strokeColor}` }}
                >
                  {cardData.number}
                </h1>
              </div>
            </div>
      
            <div>
              <h1 className={`my-2 font-bold border-b-2 ${cardData.headingColor} lg:text-2xl pb-2 text-lg`}>
                {cardData.title}
              </h1>
              <ul className="list-disc leading-loose ml-4" style={{ "--tw-marker-color": "blue" }}>
                {cardData.content.map((item, index) => (
                  <li key={index} className={cardData.listColor}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      };
      
      export default PromiseCardsContainer;
      