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
        <div  data-aos="fade-down" className='flex flex-col gap-5 border w-[755px] h-[405px] bg-white p-5 rounded-2xl'>
         <div className=' gap-2 flex'>
         <img src={viewData.image} className='h-[320px]' alt="" />
         <div className=' flex-col justify-center items-center gap-5 flex p-5 h-full w-full'>
           <h1>TITLE  : <span className='text-[green]'>{viewData.title}</span></h1>
           <h1>CATEGORY  : <span className='text-[green]'>{viewData.category}</span></h1>
           <h1>PRICE  : <span className='text-[green]'>{viewData.price}</span></h1>
           
         </div>
         </div>
            
         

  {/* buttons here  */}
          <div className='flex justify-end '>
            <button onClick={()=>onClose()} className='p-1 px-4 rounded bg-[#0CD18F] text-white'><MdCancel/></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modelcomponent
