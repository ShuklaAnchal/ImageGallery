"use client"

import React from 'react'

const Buttom = () => {
  return (
     <div  className='continer-1  justify-content-center'>
          <div>
            <img  style={{ width:"250px" }} src="https://picsum.photos/assets/images/digitalocean.svg" alt="" />
          </div>
          <div>
            <h6  style={{ paddingTop:"20px", color:"grey"}}>Proudly powered by Fastly</h6>
          </div>
          <div>
          <img style={{  width:"15rem", textAlign:"center" }} src="https://picsum.photos/assets/images/fastly.svg" alt="" />
          </div>
          <div>
            <h6  style={{ color:"grey"}}>Created by David Marby & Nijiko Yonskai</h6>
          </div>
          <div>
            <h6  style={{ color:"grey"}}>Source</h6>
          </div>
          <div>
            <h6  style={{ color:"grey"}}>Having trouble? Poke @DMarby on Twitter</h6>
          </div>
          <div>
            <h6  style={{ color:"grey"}}>Images from Unsplash</h6>
          </div>
          </div>
      
  )
}

export default Buttom