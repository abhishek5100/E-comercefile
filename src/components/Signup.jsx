import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup(props) {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });



  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      toast.success("signup successfully");
    setTimeout(()=>{
      localStorage.setItem('username', JSON.stringify(data));
      navigate("/login")
    },3000)
       localStorage.setItem("showData",JSON.stringify(true))

props.setData(JSON.parse(localStorage.getItem("showData")))

    
    
    }
  };

  return (
  
    <div className="flex gap-10 text-2xl py-10 items-center flex-col border-2 h-screen">
        <ToastContainer />
      <h1>sign up here</h1>
      <input
        className="w-fit rounded-md p-2 md:px-5 px-1  border-blue-600 border"
        type="text"
        placeholder="Username"
        name="username"
        value={data.username}
        onChange={handleInput}
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}
      <input
        className="w-fit rounded-md p-2 md:px-5 px-1 border-blue-600 border"
        type="email"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={handleInput}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <input
        className="w-fit rounded-md p-2 md:px-5 px-1 border-blue-600 border"
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleInput}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      <input
        className="w-fit rounded-md p-2 md:px-5 px-1  border-blue-600 border"
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleInput}
      />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}

      <div className="flex">
        <button type="button" className="border p-2 rounded-md px-5 bg-[lightblue]" onClick={handleSignup}>
          Signup
        </button>

              <button type="button" className="border block md:hidden p-2 rounded-md px-5 bg-[lightblue]" onClick={handleSignup}>
        <Link to="/login"><li className=' list-none hover:text-red-400 hover:underline'>login</li></Link>

        </button>
      </div>

    </div>
  );
}

export default Signup;
