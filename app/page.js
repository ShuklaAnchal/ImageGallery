"use client"

import React, { useEffect, useState } from 'react'
import Show from '@/components/Show'
import axios from "@/utils/axios";
import Specific from '@/components/Specific';
import Grayscale from '@/components/Grayscale'
import Buttom from '@/components/Buttom';
import Random from '@/components/Random'


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
     <Specific />
     <Random />
     <Grayscale />
     <Buttom />
     
  </div>
  )
}

export default page