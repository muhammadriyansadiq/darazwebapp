import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from './Firebase'
import { useState } from 'react';

export const Signup = () => {
    const [name,setName] = useState("")
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("signup");
        console.log('Success:', values);
        navigate('/signin')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err",errorMessage);
        // ..
      });
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        alert("write correct pssword/email")
      };

  return (
    <div className=' w-full flex justify-center'>
         <div className=' flex justify-center border-gray-600 borde shadow-zinc-500 shadow-2xl w-1/2'>
            
   <Form
   className=''
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input onChange={ (e)=>setName(e.target.value)}/>
    </Form.Item>



    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password onChange={ (e)=>setPassword(e.target.value)}/>
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please Enter your Email',
        },
      ]}
    >
      <Input onChange={ (e)=>setEmail(e.target.value)}/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className=' bg-sky-700'>
      
        SignUp
      </Button>
      <Link className=' ml-2 underline text-blue-700 text-lg' to={'/signin'}>SignIn</Link>
    </Form.Item>
  </Form>
  </div>
  </div>
    
  )
}
