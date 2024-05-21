import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate()


  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem('username'));
    if (storedData && storedData.username === data.username && storedData.password === data.password) {
      
      localStorage.setItem("showData",JSON.stringify(false))
      props.setData(JSON.parse(localStorage.getItem("showData")))
      toast.success("login successfully")
     
         setTimeout(()=>{
          navigate("/homepage")
         },2000)
    } else {
      toast.error('Invalid Details');
    }
  };
 
  return (
    <div className="flex gap-10 text-2xl py-10 items-center flex-col border-2 h-screen">
                 

      <h1 className='font-bold '>Login here</h1>
      <ToastContainer />
      <input
        className="w-[300px] md:w-fit rounded-md p-2 px-5 border"
        type="text"
        name="username"
        placeholder="Username"
        value={data.username}
        onChange={handleInput}
      />
      <input
        className="w-[300px] md:w-fit rounded-md p-2 px-5 border"
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleInput}
      />
      <button className="border p-2 rounded-md px-5 bg-[lightblue]" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
