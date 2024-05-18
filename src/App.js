import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import {useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Addproduct from "./components/Addproduct";
import Update from "./components/Update";


function App() {

const [show,setShow] = useState(JSON.parse(localStorage.getItem("showData")))

useEffect(()=>{
setShow(true)
},[])

  return (
    <div>
      <Navbar setData={setShow} data={show} />
  <Routes>
     <Route path="/" element={<Signup setData={setShow} showdata={show} />}/>
      <Route path={show? "/" : "/homepage"} element={<Homepage/>}/>
      <Route path="/login" element={<Login  setData={setShow}  showdata={show} />}/>
      <Route path={show? "/" : "/admin"} element={<Admin/>}/>
      <Route path={show? "/" : "/addproduct"} element={<Addproduct/>}/>
      <Route path={show? "/" : "/update/:id"} element={<Update/>}/>
     </Routes>
    </div>
  );
}

export default App;
