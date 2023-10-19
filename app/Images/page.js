"use client"

import React, { useEffect, useState } from 'react'
import Show from '@/components/Show'
import axios from "@/utils/axios";
import Buttom from '@/components/Buttom';
import Link from "next/link";

const page = () => {

  const [posts, setPosts] = useState([]);

    const [page, setpage] = useState(1);

    const [show, setShow] = useState(false);

    const getPosts = async () =>{
      try {
        const { data } = await axios.get(`/v2/list?page=${page}`);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      console.log("Api called!");
        getPosts();
    }, [page])
  return (
    <div>
     <Show />
<div  className='continer d-flex justify-content-center' style={{ width:"80%", left:"10%", position:"relative", flexWrap:"wrap", gap:"25px", flexDirection:"row"}}>
{posts.length !== 0
                ? posts.map((p) => (
  <div  className='card'key={p.id} style={{height:"20rem", marginTop:"5px", width:"24rem", textAlign:"center" }}>
       <img  style={{height:"16rem"}} src={p.download_url+".jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"} alt="" />
       <text  className='btn  d-flex justify-content-around '>
               <h4 style={{ textAlign:"center", paddingTop:"10px"}}>{p.author}</h4>
               <h5 className='rounded-pill' style={{ textAlign:"center",paddingTop:"10px", width:"4rem", height:"2.5rem", backgroundColor:"#EDF2F7", border:"none", outline:"none"}}>#{p.id}</h5>
       </text>
  </div>
  ))
         :"loading..."
        } 
  <div  style={{ marginTop:"20px", marginBottom:"150px", display:"flex", justifyContent:"center", gap:"10px"}}>
  <button onClick={() => setpage(page - 1)} className='btn btn-light'>Previous</button>      
 <button onClick={() => setpage(page + 1)}  className='btn btn-light'>Next</button>
  </div>
 
 
         </div>
        <Buttom /> 
  </div>
  )
}

export default page