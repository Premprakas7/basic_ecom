import axios from 'axios';
import React ,{useState,useEffect} from 'react'

const Home = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products')
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err)) 
    },[])

console.log(data);

  return (
    <div>
        <p>Dashboard</p>
        <select placeholder='Category'>
          <option value="">Men</option>
          <option value="">Women</option>
          <option value="">Jewellery</option>
          <option value="">Electronics</option>
        </select>
        <div className='grid gap-2 grid-cols-3'>
          {data.map((e)=>
            <div key={e.id} className='border-2 h-[14rem]'>
              <img src={e.image} alt="" className='w-[80px] ml-[10rem] mb-[1rem]'/>  
              <p className='font-semibold'>Title : {e.title}</p>
              <p className='font-bold'>Price : ₹{e.price}</p>
              </div>
          )}
        </div>
      
    </div>
  )
}

export default Home
