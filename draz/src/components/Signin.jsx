import React from 'react'
import { useNavigate, Link, } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { signInWithEmailAndPassword , auth} from './Firebase';
import { useState } from 'react';

const Signin = () => {

    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
  
      const navigate = useNavigate()
      const onFinish = (values) => {
        
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(values);
      console.log("signin",user.email);
      localStorage.setItem("lastpersonuseremail",user.email)
      navigate('/home')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error",errorMessage,errorCode);
    });
          
  
         
          // history.push('/home');
  
        };
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };




  return (
    <div>
  <div className=' flex justify-center'>
        <div className=' flex justify-center border-gray-600 borde shadow-zinc-500 shadow-2xl w-1/2 mt-5'>
<Form
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
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className=' bg-blue-800'>
        Signin
      </Button>
      <Link className = ' text-blue-700 ml-3' to={'/signup'}>Signup</Link>
    </Form.Item>
  </Form>
  </div>
    </div>

    </div>
  )
}

export default Signin
