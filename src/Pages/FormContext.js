// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create a Context
// const FormContext = createContext();


// // Create a provider component
// export const FormProvider = ({ children }) => {

// useEffect(() => {
// console.log(updateFormData
// )
// }, [])


//     const [formData, setFormData] = useState({
//         title: '',
//         content: '',
//         images: [],
//         imagePosition: 'left', // or whatever default you want
//         imageSize: 'medium', // default size
//     });

//     const updateFormData = (newData) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             ...newData,
//         }));
//         console.log(newData)
//     };

//     return (
//         <FormContext.Provider value={{ formData, updateFormData }}>
//             {children}
//         </FormContext.Provider>
//     );
// };

// // Custom hook to use the FormContext
// export const useFormContext = () => {
//     return useContext(FormContext);
// };
