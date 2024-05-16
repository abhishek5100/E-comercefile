import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Update() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [imageurl, setImageurl] = useState("")
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  },[])

  const getProductDetails = async () => {
    setLoading(true);

    console.log(params.id)
    let result = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    result = await result.json()

    setLoading(false);

    setTitle(result.title)
    setPrice(result.price)
    setDescription(result.description)
    setCategory(result.category)
    setImageurl(result.image)
  }



  const handleupdate = async () => {
    setLoading(true);

    let result = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, price, description, category, imageurl }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setLoading(false);
    toast.success("updated")
    result = await result.json()
    console.log(result)
  setTimeout(()=>{
    navigate("/admin")
  },2000)
   

  }


  return (
    <div>
    
      {loading && <Loader />}

      <div className='flex flex-col bg-[lightblue] p-5  items-center gap-5'>
      <ToastContainer />
        <h1 className='text-2xl'>UPDATE PRODUCT</h1>
        <input type="text" name=""
          placeholder='Enter title'
          className='border-2 px-3 p-3 text-2xl rounded-md'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <input type="text" name=""
          placeholder='Enter price'
          className='border-2 px-3 p-3 text-2xl rounded-md'
          value={price}
          onChange={(e) => { setPrice(e.target.value) }}
        />
        <input type="text" name=""
          placeholder='Enter description'
          className='border-2 px-3 p-3 text-2xl rounded-md'
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}

        />
        <input type="text" name=""
          placeholder='Enter category'
          className='border-2 px-3 p-3 text-2xl rounded-md'
          value={category}
          onChange={(e) => { setCategory(e.target.value) }}

        />
        <input type="text" name=""
          placeholder='Enter Image url'
          className='border-2 px-3 p-3 text-2xl rounded-md'
          value={imageurl}
          onChange={(e) => { setImageurl(e.target.value) }}


        />
        <button className='border-2 text-white p-3 px-3 rounded-md text-xl hover:bg-green-300'
          onClick={handleupdate}
        >updateproduct</button>
      </div>
    </div>
  )
}

export default Update
