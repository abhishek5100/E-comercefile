import React, { useState } from 'react'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';




const Navbar = (props) => {

  const [toggle, setToggle] = useState(false)
  const userdetails = JSON.parse(localStorage.getItem("username"))

const navigatepage = useNavigate();

  const handlelocal = () => {
    navigatepage("/login")
    localStorage.setItem("showData",JSON.stringify(true))
    props.setData(JSON.parse(localStorage.getItem("showData")))
  }

  return (
    <>
      {
      }
      <div className='bg-[#fff] mt-[-5px]  p-2 shadow-xl my-3 sticky top-0 ... z-50'>
        <div className='max-w-[1240px] py-3 mx-auto flex justify-between items-center'>
          <div className='text-3xl font-bold text-black flex'>
        
            <Link to="/">LOGO</Link>
          </div>
         {
            userdetails ?
              <p> UserName <span className='text-[red]'>{userdetails.username}</span></p> : ""
          }

          {
            toggle ?
              <IoMdClose onClick={() => { setToggle(!toggle) }} className='  text-4xl text-black md:hidden block' />
              :
              <IoIosMenu onClick={() => { setToggle(!toggle) }} className=' text-4xl text-black md:hidden block' />
          }


          <ul className='hidden md:flex gap-10 text-black text-xl'>
            {
              props.data ?

                <>
                  <Link to="/"><li className='hover:text-red-400 hover:underline'>Signup</li></Link>/
                  <Link to="/login"><li className='hover:text-red-400 hover:underline'>login</li></Link>
        
                </> :
                <>
                  <Link to="/homepage"><li className='hover:text-red-400 hover:underline'>Home</li></Link>

                  <Link to="/admin"><li className='hover:text-red-400 hover:underline'>Admin</li></Link>
                  <Link to="/login"><li className='hover:text-red-400 hover:underline' onClick={handlelocal}>Logout</li></Link>

            

                </>

            }

          </ul>



          <ul className={` z-50 duration-500 md:hidden w-full  h-screen  p-4 text-white text-xl fixed  bg-black top-[70px]
       ${toggle ? `left-[0%]` : `left-[-100%]`}
       `}>
            {
              props.data ?
                <>
                  <Link to="/homepage"><li className='hover:text-red-400 hover:underline'>Home</li></Link>
                  <Link to="/"><li className='hover:text-red-400 hover:underline'>Signup</li></Link>

                </> :
                <>
                 <Link to="/homepage"><li className='hover:text-red-400 hover:underline'>Home</li></Link>
                <Link to="/admin"><li className='hover:text-red-400 hover:underline'>Admin</li></Link>
                  <Link to="/"><li className='hover:text-red-400 hover:underline' onClick={handlelocal}>Logout</li></Link>
                </>

            }
          </ul>
        </div>
      </div>








    </>
  )
}

export default Navbar