import hamarakendraLight from "../Assets/Images/clientspage/clientslogos/hamarakendra.png";
import ipsLight from "../Assets/Images/clientspage/clientslogos/IpsNewLogo.png";
import suntrapLight from "../Assets/Images/clientspage/clientslogos/suntrap.83df4c98.png";
import publicisLight from "../Assets/Images/clientspage/clientslogos/publicisLight.svg";
import publicisDark from "../Assets/Images/clientspage/clientslogos/publicis-sapient-dark.svg";
import accentureLight from "../Assets/Images/clientspage/clientslogos/Accenture.png";
import accentureDark from "../Assets/Images/clientspage/clientslogos/ACN_BIG.D.png";
import capgeminiLight from "../Assets/Images/clientspage/clientslogos/capgemini.png";
import intertrustDark from "../Assets/Images/clientspage/clientslogos/intertrust2.webp";
import intertrustLight from "../Assets/Images/clientspage/clientslogos/intertrust.png";
import citiustechLight from "../Assets/Images/clientspage/clientslogos/CitiusTechLogo.jpg"
import aqmLight from "../Assets/Images/clientspage/clientslogos/AQMLOGO.png"
import greenlandLight from "../Assets/Images/clientspage/clientslogos/greenlandLight.png"
import nseLight from "../Assets/Images/clientspage/clientslogos/NSE3.png"
import sscLight from "../Assets/Images/clientspage/clientslogos/ss-c-technologies-logo.svg"
import SSandCDark from "../Assets/Images/clientspage/clientslogos/SSandCDark.png"

import qualityClient from "../Assets/Images/clientspage/clientwork/qualityclient.png";
import care from "../Assets/Images/clientspage/clientwork/care.png";
import support from "../Assets/Images/clientspage/clientwork/support.png";
import personnel from "../Assets/Images/clientspage/clientwork/personnel.png";
import innovation from "../Assets/Images/clientspage/clientwork/innovation.png";
import commitment from "../Assets/Images/clientspage/clientwork/commitment.png";
import highquality from "../Assets/Images/clientspage/clientwork/highquality3.jpeg"
import onbudget from "../Assets/Images/clientspage/clientwork/ontime.jpeg"
import { useTheme } from "../Components/common/ThemeProvider";


export const clientTestimonials = [

        {
          review: "Partnering with them has significantly improved our project efficiency.",
          client: "- Hamarakendra"
        },
        {
          review: "Their dedication to quality is unmatched. Highly recommended!",
          client: "- IPS_e_Services"
        },
        {
          review: "They deliver on time, with excellent support throughout.",
          client: "- SunTrap"
        }
      ]
      // export const clientLogos = [
        
      //   { src: ips, alt: "IPS", delay: "0", height: "h-16" },
      //   { src: capgemini, alt: "Capgemini", delay: "400" },
      //   { src: accenture, alt: "Accenture", delay: "800" },
      //   { src: hamarakendra, alt: "Hamarakendra", delay: "1200", height: "h-16" },
      //   { src: NSE, alt: "NSE", delay: "100", height: "h-10" },
      //   { src: intertrust, alt: "Intertrust", delay: "500", height: "h-16" },
      //   { src: suntrap, alt: "Suntrap", delay: "900" },
      //   { src: publicis, alt: "Publicis", delay: "1300", height: "h-16" },
      //   { src: AQM, alt: "AQM", delay: "0" },
      //   { src: SSC, alt: "SSC", delay: "400" },
      //   { src: CitiusTech, alt: "CitiusTech", delay: "800" },
      //   { src: greenland, alt: "Greenland", delay: "1200", height: "bg-red-200" },
      // ];
  

      export const clientLogos = [
        {
            srcLight: ipsLight,
            srcDark: ipsLight,
            alt: "IPS",
            delay: "0",
            height: "h-16",
            content: "Worked on cloud integration solutions and software development."
        },
        {
            srcLight: capgeminiLight,
            srcDark: capgeminiLight,
            alt: "Capgemini",
            delay: "300",
            content: "Collaborated on digital transformation projects for various sectors."
        },
        {
            srcLight: accentureLight,
            srcDark: accentureDark,
            alt: "Accenture",
            delay: "600",
            content: "Provided data analytics and business strategy consulting."
        },
        {
            srcLight: hamarakendraLight,
            srcDark: hamarakendraLight,
            alt: "Hamarakendra",
            delay: "900",
            height: "h-16",
            content: "Developed community engagement platforms and mobile apps."
        },
        {
            srcLight: nseLight,
            srcDark: nseLight,
            alt: "NSE",
            delay: "100",
            height: "h-10",
            content: "Assisted in enhancing trading algorithms and system architecture."
        },
        {
            srcLight: intertrustLight,
            srcDark: intertrustDark,
            alt: "Intertrust",
            delay: "400",
            height: "h-16",
            content: "Implemented cybersecurity solutions and compliance strategies."
        },
        {
            srcLight: suntrapLight,
            srcDark: suntrapLight,
            alt: "Suntrap",
            delay: "700",
            content: "Worked on renewable energy management systems."
        },
        {
            srcLight: publicisLight,
            srcDark: publicisDark,
            alt: "Publicis",
            delay: "1000",
            height: "h-10",
            content: "Created marketing analytics tools and consumer insights platforms."
        },
        {
            srcLight: aqmLight,
            srcDark: aqmLight,
            alt: "AQM",
            delay: "0",
            
            content: "Developed quality management software for production systems."
        },
        {
            srcLight: sscLight,
            srcDark: sscLight,
            alt: "SSC",
            delay: "300",
            height: "h-12",
            content: "Provided supply chain optimization solutions and ERP integrations."
        },
        {
            srcLight: citiustechLight,
            srcDark: citiustechLight,
            alt: "CitiusTech",
            delay: "600",
            content: "Worked on healthcare IT solutions and patient data management."
        },
        {
            srcLight: greenlandLight,
            srcDark: greenlandLight,
            alt: "Greenland",
            delay: "900",
            height: "dark:mix-blend-lighten",
            content: "Assisted in agricultural tech innovations and sustainability practices."
        }
    ];
    
    
      export const WeOffersToClient = [
        {
          src: qualityClient,
          title: "Client Satisfaction",
          description: "Clients appreciate us for our commitment to excellence and their satisfaction.",
          number: "01",
          bgColor: "bg-blue-700",
        },
        {
          src: care,
          title: "Client Focus",
          description: "We prioritize client needs.",
          number: "02",
          bgColor: "bg-green-700",
        },
        {
          src: support,
          title: "Support",
          description: "Continuous support for our clients.",
          number: "03",
          bgColor: "bg-red-700",
        },
        {
          src: personnel,
          title: "Expert Team",
          description: "Highly skilled professionals.",
          number: "04",
        },
        {
          src: innovation,
          title: "Innovation",
          description: "Innovative solutions leading the industry.",
          number: "05",
          bgColor: "bg-purple-700",
        },
        {
          src: commitment,
          title: "Commitment",
          description: "Unwavering dedication to quality.",
          number: "06",
          bgColor: "bg-orange-700",
        },
        {
          src: highquality,
          title: "High-Quality Products",
          description: "Our clients value us for consistently delivering high-quality products.",
          number: "07",
          bgColor: "bg-orange-700",
        },
        {
          src: onbudget,
          title: "On Budget, On-Time",
          description: "Clients trust us for our reliability in delivering on time and within budget.",
          number: "08",
          bgColor: "bg-orange-700",
        },
      ];
    
    