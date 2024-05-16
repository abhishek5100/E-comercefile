import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import {useState } from "react";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Addproduct from "./components/Addproduct";
import Update from "./components/Update";


function App() {

const [show,setShow] = useState(JSON.parse(localStorage.getItem("showData")))



  return (
    <div>
      <Navbar setData={setShow} data={show} />
     <Routes>
     <Route path="/" element={<Signup setData={setShow} showdata={show} />}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/login" element={<Login  setData={setShow}  showdata={show} />}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/addproduct" element={<Addproduct/>}/>
      <Route path="/update/:id" element={<Update/>}/>




     </Routes>
    </div>
  );
}

export default App;
