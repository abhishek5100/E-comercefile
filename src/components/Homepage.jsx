import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider1 from './Slider1';
import Loader from './Loader';

function Homepage() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true)
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        setLoading(false)
        setData(response.data)
      } catch (error) {
        console.error("error")
      }
    }
    fetchdata()
  }, []);
  return (
    <div>
      <Slider1 />
      <div >
        {loading && <Loader />}

        <div className=' p-5   max-w-[1250px] gap-5 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3'>
          {
            data && data.map((value, index) => {
              return (
                <div key={index} className=' p-5 w-fit   my-10 shadow-2xl flex flex-col  text-center col-span-1'>
                  <div className='h-fit w-fit flex items-center  overflow-hidden '>
                    <img src={value.image} className='hover:scale-150 h-[200px] w-[400px] object-contain duration-1000 hover:cursor-zoom-out' />
                  </div>
                  <p className=' decoration-8 text-[green] font-serif bold'>{value.title}</p>

                  <p className='text-2xl decoration-8 font-serif  bold'>Rs.{value.price}</p>
                  <p className=' decoration-8 font-serif text-[12px] bold'>{value.description}</p>

                  <p className='text-[#b0914f] bold text-[1.5rem]'>{value.category}</p>
                  <p className='text-[red]'>rate:{value.rating.rate}<br />&nbsp;&nbsp;&nbsp;&nbsp;count:{value.rating.count}</p>

                </div>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}

export default Homepage
