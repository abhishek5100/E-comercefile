import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdCancel } from "react-icons/md";


function Modelcomponent({ isVisible,onClose,viewData}) {
    useEffect(() => {
    AOS.init({ duration: 500 });
  }, [])

  if (!isVisible) {
    return null
  }
  return (
   <div>
      <div data-aos="fade-down" className='fixed inset-0 rounded-xl  bg-black bg-opacity-5 flex justify-center items-center'>
        <div  data-aos="fade-down" className='flex flex-col gap-1 border md:w-fit w-[300px] h-[250px] md:h-[350px] bg-white p-5 rounded-2xl'>
         <div className=' gap-2 flex '>
         <img src={viewData.image} className='h-[120px] md:h-[300px]' alt="" />
         <div className=' flex-col md:text-[20px]  text-[12px] justify-center items-center gap-1 flex p-5 h-full w-full'>
           <h1>TITLE  : <span className='text-[green]'>{viewData.title}</span></h1>
           <h1>CATEGORY  : <span className='text-[green]'>{viewData.category}</span></h1>
           <h1>PRICE  : <span className='text-[green]'>{viewData.price}</span></h1>
           
         </div>
         </div>
            
         

  {/* buttons here  */}
          <div className='flex justify-end mt-[-20px] '>
            <button onClick={()=>onClose()} className='p-1 px-4 rounded bg-[#0CD18F] text-white'><MdCancel/></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modelcomponent
