import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
// const onFinish = (values) => {

//   console.log('Success:', values);

// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };



const Notification = () => {
  const navigate = useNavigate()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_d3jp6jq', 'template_979xvfj', form.current, {
            publicKey: 'C8js3gBFKQ9cn_hR7',
          })
          .then(  
            () => {
              console.log('SUCCESS!');
              alert("thanks for feedback")
              navigate("/home")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
<>
<Header />
  <div className=' w-full flex justify-center items-center h-[550px]'>
<form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col justify-around items-center h-[300px]'>
    <div>
      <label>Name</label>
      <input type="text" name="from_email" className=' ml-3' placeholder=' name...'/>
      </div>
      <div>
      <label>Email</label>
      <input type="email"  name="from_name"  className=' ml-3' placeholder='email...'/>
      </div>
      <div>
      {/* <label>Mes sage</label> */}
     <textarea cols="24" name="message" rows="3" className=' ml-11' placeholder=' feedback...'></textarea>
      </div>
      <input type="submit" value="Send" className=' bg-green-600 p-3 text-white cursor-pointer rounded-lg ml-5'/>
    </form>
    </div>
  </>
  )
}

export default Notification;