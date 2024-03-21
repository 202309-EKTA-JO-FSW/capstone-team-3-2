"use client"
import React, { useState, useRef } from 'react';
import Footer from '@/components/Footer';
import Hero from "@/components/Hero/Hero";
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedReason, setSelectedReason] = useState('');
    const subjectRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const reasons = ['I cannot login', 'Report a problem', 'Feedback'];

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleReasonSelect = (reason) => {
        setSelectedReason(reason);
        setShowDropdown(false);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validation
            if (!emailRef.current.value || !messageRef.current.value) {
                throw new Error('Email and message are required fields');
            }

            // Mock delay for demonstration
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setMessage("Your email was sent successfully");
            setMessageType('success');

            // Clear form fields after successful submission
            emailRef.current.value = '';
            subjectRef.current.value = '';
            messageRef.current.value = '';
        } catch (error) {
            console.error("Failed to send the email:", error);
            setMessage("Failed to send the email. Please try again.");
            setMessageType('error');
        }
    };

    return (
        <div className="bg-gray-200">
            <div className="flex flex-col">
                <div className="ml-4 text-black"> 
                    <Hero
                        imgUrl={"https://plus.unsplash.com/premium_photo-1661542867896-54694497f5cd?q=80&w=2854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        header={"Contact Us" } 
                        subHeader={"DishDash"}
                        paragraph={"We are here to help you 24/7, with top-notch support specialists"}
                        headerClassName="ml-10"
                        textColor={"text-black"}
                    />
                </div>
            </div>
            <div className="flex flex-col" style={{marginLeft: "2rem", marginTop: "2rem"}}>
                <div className="w-full"> 
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center">
                            <div style={{padding: "2rem"}}><h2 className='font-bold ml-1'>Submit a request</h2></div>
                            <div className="mb-4 relative">
                                <input
                                    ref={subjectRef}
                                    placeholder="Select a reason"
                                    type="text"
                                    id="subject"
                                    className="mt-1 px-2 py-2 w-full cursor-pointer"
                                    onClick={handleDropdownToggle}
                                    value={selectedReason}
                                    readOnly
                                />
                                {showDropdown && (
                                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-800 rounded-b-3xl shadow-lg w-full">
                                        {reasons.map((reason, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleReasonSelect(reason)}
                                            >
                                                {reason}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4 w-[800px]">
                                <input
                                    ref={emailRef}
                                    placeholder="Email"
                                    type="email"
                                    id="email"
                                    className="mt-1 px-2 py-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <textarea
                                ref={messageRef}
                                placeholder="Write us a message"
                                id="message"
                                className="mt-2 px-2 py-4 w-full"
                            />
                        </div>
                        <div className="flex justify-center rounded-3xl">
                            <button
                                type="submit"
                                className="font-bold py-2 bg-gray-300 hover:bg-pink-100 focus:bg-pink-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl"
                                style={{ transition: 'background-color 0.3s' }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {message && (
                        <div className={`flex justify-center items-center text-white font-md text-center w-full mx-[2rem] py-4 rounded-3xl mt-4 ${messageType === 'success' ? 'bg-green-800' : 'bg-red-800'}`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
            <div>
                <img src="https://fps.cdnpk.net/landing-about-us/banner/malaga-desktop-v2.png?w=3840&h=1920&q=95" alt="contact 2" />
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;