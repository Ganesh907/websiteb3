import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
export const ContactForm = () => {
        const [formValues, setFormValues] = useState({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
        });
        const [errors, setErrors] = useState({});
        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormValues({
                        ...formValues,
                        [name]: value
                });
                setErrors({
                        ...errors,
                        [name]: ''
                });
        };

        const validate = () => {
                let tempErrors = {};
                if (!formValues.firstName.trim()) tempErrors.firstName = 'First Name is required';
                if (!formValues.lastName.trim()) tempErrors.lastName = 'Last Name is required';
                if (!formValues.email.trim()) {
                        tempErrors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
                        tempErrors.email = 'Email is invalid';
                }
                if (!formValues.phone.trim()) tempErrors.phone = 'Phone Number is required';
                if (!formValues.message.trim()) tempErrors.message = 'Message is required';

                setErrors(tempErrors);
                return Object.keys(tempErrors).length === 0; // Return true if no errors
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                if (validate()) {
                        alert("Form submitted successfully!");
                        console.log("Form Data: ", formValues);
                        setFormValues({
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: '',
                                message: ''
                        });
                }
        };
  return (
        <div className=' flex justify-center items-center w-auto bg-white p-5 rounded-md'>

       
        <form className=' text-center'   onSubmit={handleSubmit}
        //  data-aos="zoom-in" data-aos-duration="1000"
         >
        <h1 className='font-bold text-4xl drop-shadow-lg text-[var(--primary-color)]'>Contact Us</h1>
        <h2 className=' font-semibold mt-2 text-base text-black'>
                Any question or remarks? Just write us a message !
        </h2>
        <p className='opacity-70 font-semibold  text-sm text-black'>Fill up the form and our team will get back to you within 24 hours.</p>

        
        <div className='grid grid-cols-2 gap-10 mt-8 mb-8 '>
                <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        variant="standard"
                        value={formValues.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        InputLabelProps={{
                                style: { color: "var(--primary-color)" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)', 
                                  },
                                  color: 'var(--text-color)'
                                }
                              }}
                />
                <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="standard"
                        value={formValues.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        InputLabelProps={{
                                style: { color: "var(--primary-color)" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)', 
                                  },
                                  color: 'var(--text-color)'
                                }
                              }}
                />
               
              
                  <TextField
                        id="title"
                        name="title"
                        label="Company"
                        variant="standard"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputLabelProps={{
                                style: { color: "var(--primary-color)" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)', 
                                  },
                                  color: 'var(--text-color)'
                                }
                              }}
                />
                
                <TextField
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        variant="standard"
                        value={formValues.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        InputLabelProps={{
                                style: { color: "var(--primary-color)" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)', 
                                  },
                                  color: 'var(--text-color)'
                                }
                              }}
                />
                 
                 <TextField
                        id="email"
                        name="email"
                        label="Work Email"
                        variant="standard"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputLabelProps={{
                                style: { color: "var(--primary-color)" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)', 
                                  },
                                  color: 'var(--text-color)'
                                }
                              }}
                />
                  <TextField
                        id="title"
                        name="title"
                        label="Title"
                        variant="standard"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputLabelProps={{
                                style: { color: "var(--primary-color)" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)', 
                                  },
                                  color: 'var(--text-color)'
                                }
                              }}
                />
               
        </div>
        <TextField
                id="message"
                name="message"
                label="Requirement"
                multiline
                rows={2}
                variant="standard"
                fullWidth
                value={formValues.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ marginBottom: '20px' }}
                InputLabelProps={{
                        style: { color: "var(--primary-color)" },
                      }}
                      InputProps={{
                        sx: {
                          '& .MuiInputBase-input::placeholder': {
                            color: 'var(--primary-color)', 
                          },
                          color: 'var(--text-color)'
                        }
                      }}
        />
        <Button
                variant="contained"
                sx={{backgroundColor:"var(--primary-color)"}}
                type="submit"
                fullWidth
        >
                SEND MESSAGE
        </Button>
       </form>
        </div>
  )
}
