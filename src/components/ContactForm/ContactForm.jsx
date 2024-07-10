import React, { useEffect, useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState(null);

  const sendEmail = async (e) => {
    setError(null);
    e.preventDefault();
   if(e.target[0].value === ''){
      toast(`* Name is required`);
     return;
    }else if(e.target[1].value === ''){
      toast(`* Email is required`);
     return;
    }else if(e.target[2].value === ''){
      toast(`* Message is required`);
     return;
    }
    await emailjs
      .sendForm('service_zxjxkm3', 'template_e8p24vr', form.current, {
        publicKey: 'T4l9aexqXGNDuFxtZ',
      })
      .then(
        () => {
            form.current.reset();
           toast('Email sent successfully');
        },
        (error) => {
          setError(error);
          toast('Error sending email');
        },
      );
  };


  return (
    <div className=" w-full mt-32 p-4 flex justify-center content-center">
      <div className="w-full flex flex-col justify-center items-center block-ele">
        <h1 className="text-3xl text-white font-bold uppercase ">Contact Me</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 text-3xl text-white md:w-2/4 w-full"
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="text-black p-1 rounded-md active:cursor-text px-2 outline-none border-b-4 border-transparent  hover:border-yellow-400 bg-white"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="text-black  p-1 rounded-md px-2 active:cursor-text outline-none border-b-4 hover:border-yellow-400 bg-white"
          />
          <label>Message</label>
          <textarea
            name="message"
            className="text-black p-2 rounded-md px-2 active:cursor-text outline-none border-b-4 border-transparent hover:border-yellow-400 bg-white"
          />
          <div className="w-full flex justify-center items-center py-4">
            <input
              type="submit"
              value="Send"
              className="hover:cursor-pointer btn w-1/2 hover:bg-yellow-800 hover:text-white hover:scale-105"
            />
            
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;