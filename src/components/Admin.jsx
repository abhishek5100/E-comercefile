import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Modelcomponent from './Modelcomponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdAdd } from "react-icons/io";




function Admin() {
    const [data, setData] = useState([]);
    const [searchCategory, setSearchCategory] = useState('all');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
    const [showModel, setShowModel] = useState(false)
    const [viewData, setViewData] = useState(null)




    const getdata = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setViewData(() => response.data)
            setShowModel(true)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setLoading(false);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
        setSearchCategory(e.target.value);
    };

    const handleKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const filterData = data.filter((item) => {
        const matchesCategory = searchCategory === "all" || item.category.toLowerCase().includes(searchCategory.toLowerCase());
        const matchesKeyword = item.title.toLowerCase().includes(searchKeyword.toLowerCase()) || item.description.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchesCategory && matchesKeyword;
    });

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
            if (response.status === 200) {
                setLoading(false);
                toast.info("deleted")
                setData(data.filter(item => item.id !== id));
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col p-10 justify-center items-center'>
           
            {loading && <Loader />}
            <Modelcomponent viewData={viewData} isVisible={showModel} onClose={() => setShowModel(false)} />
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <select
                    value={searchCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 rounded-md p-2"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search by keyword..."
                    value={searchKeyword}
                    onChange={handleKeywordChange}
                    className="border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className='flex  md:text-xl w-full px-2 items-center  justify-end'>
            <Link to="/addproduct">
                Addproduct:
                <button className='p-1 border bg-[blue] text-white'> <span><IoMdAdd/></span> </button>
            </Link>

            </div>
            <ToastContainer />

            <table className="font-sans border-collapse md:w-full">

                <thead>
                    <tr>
                        <th className='border-2 text-left p-[8px]'>Title</th>
                        <th className='border-2 text-left p-[8px]'>Price</th>
                        <th className='border-2 hidden md:block text-left p-[8px]'>Description</th>
                        <th className='border-2 text-left p-[8px]'>Category</th>
                        <th className='border-2 text-left p-[8px]'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((value, index) => (

                        <tr key={index}>
                            <td className='border-2 w-[100px] text-left text-[10px]  md:text-[15px]  p-[8px]'>{value.title}</td>
                            <td className='border-2 text-left text-[10px]  md:text-[15px]  p-[8px]'>{value.price}</td>
                            <td className='border-2 text-left text-[10px] hidden md:block md:text-[15px] p-[8px]'>{value.description}</td>
                            <td className='border-2 text-left p-[8px] text-[10px]  md:text-[15px] '>{value.category}</td>
                            <td className='border-2 text-left p-[8px]'>



                                <Link >
                                    <button className='bg-[#cfc956] md:text-[12px] text-[10px] px-1  text-white'
                                        onClick={() => {
                                            // setUid(()=>value.id)
                                            // setShowModel(true)  
                                            getdata(value.id);
                                        }

                                        }
                                    >view
                                    </button>
                                </Link>

                                <Link to={"/update/" + value.id}>
                                    <button className='bg-[blue] md:text-[12px] text-[10px] px-1 mt-1 text-white'>Update</button>
                                </Link>
                                <button
                                    className='bg-[red] md:text-[12px] text-[10px] px-1 mt-1 text-white'
                                    onClick={() => handleDelete(value.id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
