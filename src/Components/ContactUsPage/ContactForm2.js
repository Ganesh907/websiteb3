import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

export const ContactForm2 = () => {
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
        if (!formValues.firstName.trim()) tempErrors.firstName = 'Full Name is required';
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
        <div className='flex justify-center p-5 md:p-0 md:py-5 items-center w-auto md:scale-90 text-white rounded-md'
            style={{
                backgroundColor: 'rgb(0,0,0,0.4)'
            }}>
            <form className='text-center text-white' onSubmit={handleSubmit}>
                <h1 className='font-bold text-4xl drop-shadow-lg text-yellow-400'>Contact Us</h1>
                <h2 className='font-semibold mt-2 text-base text-white'>
                    Any question or remarks? Just write us a message!
                </h2>
                <p className='font-semibold text-sm text-yellow-400'>Fill up the form and our team will get back to you within 24 hours.</p>

                <div className='grid grid-cols-1 gap-10 mt-8 mb-8'>
                    {/* Full Name Field */}
                    <Box display="flex" alignItems="center">
                        <PersonIcon style={{ color: 'white', marginRight: '10px', marginTop: '14px' }} />
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="Full Name"
                            variant="standard"
                            value={formValues.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            InputLabelProps={{
                                style: { color: "white" },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                    },
                                    color: 'white',
                                }
                            }}
                            fullWidth // Optional: makes the TextField full-width
                        />
                    </Box>

                    {/* Phone Number Field */}
                    <Box display="flex" alignItems="center">
                        <PhoneIcon style={{ color: 'white', marginRight: '10px', marginTop: '14px' }} />
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
                                style: { color: "white" },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                    },
                                    color: 'white',
                                }
                            }}
                            fullWidth
                        />
                    </Box>

                    {/* Email Field */}
                    <Box display="flex" alignItems="center">
                        <EmailIcon style={{ color: 'white', marginRight: '10px', marginTop: '14px' }} />
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
                                style: { color: "white" },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                    },
                                    color: 'white',
                                }
                            }}
                            fullWidth
                        />
                    </Box>
                </div>

                {/* Message Field */}
                <Box display="flex" alignItems="center">
                    <MessageIcon style={{ color: 'white', marginRight: '10px', marginTop: '0px' }} />
                    <TextField
                        id="message"
                        name="message"
                        label="Write Your Message"
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
                            style: { color: "white" },
                        }}
                        InputProps={{
                            sx: {
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'white',
                                },
                                color: 'white',
                            }
                        }}
                    />
                </Box>

                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#0060b5" }}
                    type="submit"
                    fullWidth
                >
                    SEND MESSAGE
                </Button>
            </form>
        </div>
    );
}




  {/* <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="standard"
                        value={formValues.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        InputLabelProps={{
                                style: { color: "white" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'white', 
                                  },
                                  color: 'white'
                                }
                              }}
                /> */}
               
              
                  {/* <TextField
                        id="title"
                        name="title"
                        label="Company"
                        variant="standard"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputLabelProps={{
                                style: { color: "white" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'white', 
                                  },
                                  color: 'white'
                                }
                              }}
                /> */}



                  {/* <TextField
                        id="title"
                        name="title"
                        label="Title"
                        variant="standard"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputLabelProps={{
                                style: { color: "white" },
                              }}
                              InputProps={{
                                sx: {
                                  '& .MuiInputBase-input::placeholder': {
                                    color: 'white', 
                                  },
                                  color: 'white'
                                }
                              }}
                /> */}
                