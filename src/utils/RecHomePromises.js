import delivery from "../Assets/Images/deliveryicon1.png"; // Assuming these are the correct image paths
import clienticon from "../Assets/Images/clienticon2.png"; 
import rating from "../Assets/Images/ratingicon.png"; 
import candidate from "../Assets/Images/candidateicon1.png"; 

export const promises = [
  {
    number: "01",
    title: "Full End to end Delivery",
    imageSrc: delivery,
    content: [
      "Recruiters manage the entire end-to-end delivery process.",
      "Standardized process ensures better candidate presentation.",
      "Recruiters handle requirements gathering to candidate start date.",
      "Workflow prevents information loss during translation.",
    ],
    bgColor: "bg-[#0060b5]",
    borderColor: "border-white",
    textColor: "text-transparent",
    strokeColor: "white",
    imgBorderStyle: "border-r-[50%]",
    headingColor: "text-white border-white",
    listColor: "text-white",
  },
  {
    number: "02",
    title: "We assure a CLIENT to",
    imageSrc: clienticon,
    content: [
      "Understand their requirements in detail before taking any action.",
      "Deploy the right recruiters, in the right quantity, for the right duration.",
      "Maintain confidentiality throughout all dealings across the value chain.",
      "Fulfill their requirements exactly as per their expectations.",
    ],
    bgColor: "bg-white",
    borderColor: "border-[#0060b5]",
    textColor: "text-transparent",
    strokeColor: "#0060b5",
    imgBorderStyle: "border-r-[50%]",
    headingColor: "text-black border-black",
    listColor: "text-black",
  },
  {
    number: "03",
    title: "We assure a CANDIDATE to",
    imageSrc: candidate,
    content: [
      "Take the time to understand your unique needs and requirements.",
      "Refer only genuine positions that match your qualifications.",
      "Ensure that roles align with your experience and career goals.",
      "Maintain complete confidentiality in all communications.",
    ],
    bgColor: "bg-[#0060b5]",
    borderColor: "border-white",
    textColor: "text-transparent",
    strokeColor: "white",
    imgBorderStyle: "border-r-[50%]",
    headingColor: "text-white border-white",
    listColor: "text-white",
  },
  {
    number: "04",
    title: "Competitive Rates & Delivery",
    imageSrc: rating,
    content: [
      "A tech and HR solutions startup going the extra mile.",
      "Fast, accurate delivery with uncompromised quality.",
      "Best industry rates for cost-effective solutions.",
      "Building long-term client relationships.",
    ],
    bgColor: "bg-white",
    borderColor: "border-[#0060b5]",
    textColor: "text-transparent",
    strokeColor: "#0060b5",
    imgBorderStyle: "border-r-[50%]",
    headingColor: "text-black border-black",
    listColor: "text-black",
  },
];
