import React, { useEffect, useState } from 'react'
// import intertrust from '../../Assets/Images/RecServiceBackground.jpg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export const RecServicesPage = () => {
  
  const [bottomRadius, setBottomRadius] = useState('0%');

  useEffect(() => {
          const handleScroll = () => {
                  const scrollTop = window.scrollY;
                  const maxScroll = 50; // Adjust this value for how quickly you want the border to round
                  const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
                  setBottomRadius(`${radius}%`);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
  <div 
  className="relative h-[100vh] shadow-xl bg-[#0060b5] transition-all duration-1000 ease-in-out" 
  style={{
    borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`, // Dynamic bottom border radius
    backgroundImage: `
      
      linear-gradient(rgba(0, 96, 181, 0.5), rgba(0, 96, 181, 0.5)), /* Transparent blue overlay */
        `,
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat', 
    // filter: 'blur(5px)',  // Adds blur effect
  }}
>
<div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
  <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
</div>
</div>

       <div>
      <h1  className="font-bold text-xl" style={{color: "var(--secondary-color)"}}>
        SERVICES OFFERED
      </h1>
      In a 24/7 economy, corporations have different needs.
      The way they work is changing and this also influences the
      skills and talent they need. Digital HR, new solutions and tools
      are disrupting our market by drastically changing the way people
      connect to jobs and the role BitByBit plays in this space. Clients
      and candidates expect to be served anywhere anytime and
      through various devices, in a way we never imagined it was
      possible earlier, ultimately influencing the way we work for
      our clients.We have a team of young but highly knowledgeable
      and highly experienced professionals, which are well equipped
      to offer our clients the best HR solutions in the form of
      customized delivery.

      <br />
      <br />
      <br />
      <br />
      <h1  className="font-bold text-xl" style={{color: "var(--secondary-color)"}}>
     

        Permanent Staffing :
      </h1>
      We provide skilled, highly skilled and professional
      recruitment services. Working closely with a wide range
      of clients as an extension of their own teams, we deliver
      bespoke recruitment solutions.Hiring the right candidates
      for permanent roles is a commitment that can reap
      benefits over the long term. We help you find the
      best people for your projects through our
      tried-and-tested processes, with a quick
      turn-around- time.
      <br />
      <br />
      <br />
      <br />
      <h1  className="font-bold text-xl" style={{color: "var(--secondary-color)"}}>
      Temporary Staffing :
      </h1>
      Our Temporary Staffing can help you save valuable
      time and resources. We are equipped to handle the
      entire life cycle of the employee including the
      recruitment process, background checks, onboarding,
      placement, payroll management, monthly compliance,
      and other staffing needs. Furthermore, our team can
      help with employee training and development,
      ensuring that the team is prepared to excel in their roles.
      We understand that each business is unique, and
      we work closely with you to customize our services
      to your specific needs.
      <br />
      <br />
      <br />
      <br />
      <h1  className="font-bold text-xl" style={{color: "var(--secondary-color)"}}>
      Recruitment process outsourcing (RPO)</h1>
      In our Recruitment Process Outsourcing (RPO)
      service, we take up the task of identifying potential
      candidates for your recruitments. The approach aims
      to deliver well-suited candidates to you while
      minimizing the  participation of your HR personnel.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1  className="font-bold text-xl" style={{color: "var(--secondary-color)"}}>
      B3 EXPERTISE IN IT RECRUITMENT :
      </h1>
      JAVA
      .NET
      .NET
      PHP Developers
      Android, Kotlin, Flutter - Developer
      SAP ABAP / Basis / FICO / MDG / CRM / BPC / Hana

      SAP ABAP
      Linux Admin / Network Engineer
      Microsoft Azure / Ms Dynamic 365
      Workday/ OracleES / EDM
      Devops / RSA ARCHER / PAAS

      C++ Programmer / Open Link
      Sales Force / RED HAT

      Mongo DB / Cloud contact center OPS
      Google Big Query / Pega System
      Service Desk / Service Now
      Manual / Automation tester
      B3
      Angular Developer
      Business Analyst
      Data Scientist / Machine Learning


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <h1  className="font-bold text-xl" style={{color: "var(--secondary-color)"}}>
      B3 Expertise into Contract Hiring:
      </h1>
      .NET

      DotNet Developer
      ReactJs Developer
      PL/SQL Developer
      Tableau Analyst
      Java Developer
      UI/UX Developer
      SQL Developer
      IOS Developer
      Angular Developer
      Python Developer
      Application Support
      Automation Tester
      Devops Engg Cloud Operations
      Data Scientist / Machine Learning
      Service Desk Analyst
      SAP ABAP
      CONSULTANT
      Oracle PL/SQL
      SAP ABAP Consultant
      SAP ABAP
      HR
      SAP ABAP HR
      SAP HANA
      SAP HANA




      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


















      <h1  className="font-bold text-2xl" style={{color: "var(--secondary-color)"}}>
      Our Promise
      </h1>

      <br/>
      <br/>
      Full End to end Delivery:
      <br/>
      §Our well trained recruiters in close coordination with their
      supervisors are in charge of the full end to end delivery.
      This standardized the process flow and allows better
      candidate presentation.
      §We do not simply function as client-facing or candidate
      sourcing recruiters. All recruiters have responsibilities starting
      from requirements gathering till candidate commencement date.
      §The above workflow ensures non-occurrence of
      requirements lost in translation' as well as ensures
      faster delivery.

      <br/>
      <br/>
      We assure a CLIENT to:
      <br/>
      
      §Understand their requirements in details before any
      action.
      §Deploy right recruiters, in right quantity, for the
      right period.
      §Maintain confidentiality in all dealings across the
      value chain.

      §Ultimately fulfill their requirements exactly as
      per their expectations.


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      
      We assure a CANDIDATE to:
      <br />
      §Take the time to understand you and your needs
      §Refer only genuine positions which best suit your
      qualifications and experience
      §Maintain confidentiality in all dealings
    


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      Competitive Rates & Delivery:
      <br />
      Being a delivery based TECHNOLOGY and HR Solutions
      start up agency that goes an extra mile, we're known for our fast
      and accurate delivery without compromising our up to themark
      standards. At BitByBit, we provide the best industry rate as we
      are committed to long-term relationship with our clients and we
      are recognized for being one of the best value-for-money
      TECHNOLOGY and HR agencies in a very short duration.
      Competitive Rates & Delivery:
      <br/>
      <br/>
      <br/>
      At BitByBit, we know it is all about YOU…
      whether it is that next important permanent
      appointment  or a casual temporary staffing
      requirement, let our experienced recruiters
      assist YOU.


    </div>
    </>
  )
}
