import React, { useState } from 'react'

function Addproduct() {

const [title,setTitle] = useState("")
const [price,setPrice] = useState("")
const [description,setDescription]= useState("")
const [category,setCategory] = useState("")
const [imageurl,setImageurl] = useState("")



const handleAdd = async ()=>{
   let result = await fetch("https://fakestoreapi.com/products",{
    method:"post",
    body:JSON.stringify({title,price,category,description,imageurl}),
    headers:{
        "Content-Type":"application/json"
    }
   });
   result = await result.json()
   console.log(result)
   setTitle("")
 setCategory("")
 setPrice("")
 setDescription("")
 setImageurl("")
   
}


  return (
    <div>
      <div className='flex flex-col bg-[lightblue] p-5  items-center gap-5'>
        <h1 className='text-2xl'>ADD PRODUCT</h1>
        <input type="text" name="" 
        placeholder='Enter title'
        className='border-2 px-3 p-3 text-2xl rounded-md'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <input type="text" name="" 
        placeholder='Enter price'
        className='border-2 px-3 p-3 text-2xl rounded-md'
        value={price}
        onChange={(e)=>{setPrice(e.target.value)}}
        />
        <input type="text" name="" 
        placeholder='Enter description'
        className='border-2 px-3 p-3 text-2xl rounded-md'
         value={description}
         onChange={(e)=>{setDescription(e.target.value)}}

        />
        <input type="text" name="" 
        placeholder='Enter category'
        className='border-2 px-3 p-3 text-2xl rounded-md'
        value={category}
        onChange={(e)=>{setCategory(e.target.value)}}

        />
        <input type="text" name="" 
        placeholder='Enter Image url'
        className='border-2 px-3 p-3 text-2xl rounded-md'
        value={imageurl}
        onChange={(e)=>{setImageurl(e.target.value)}}


        />
        <button className='border-2 text-white p-3 px-3 rounded-md text-xl hover:bg-green-300'
        onClick={handleAdd}
        >addproduct</button>
      </div>
    </div>
  )
}

export default Addproduct
