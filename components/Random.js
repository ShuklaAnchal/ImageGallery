import React from 'react'
import Link from 'next/link'

const Specific = () => {
  return (
    <div  className='specific '>
        <div  className='right-2' >
     <img  style={{ borderRadius:"10px"}} src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
    </div>
    <div  className='left-1'>
        <div  className='texts'  style={{ position:"relative", left:"10%", top:"5%"}}>
        <h2  style={{ fontSize:"30px"}}>Static Random Image</h2>
        <p  style={{ fontSize:"17px", marginTop:"5px", width:"70%"}}>Get the same random image every time based on a seed, by adding /seed/seed to the start of the url..</p>
        <h6  style={{ height:"3rem", width:"25rem", backgroundColor:"#EBEEF0", borderRadius:"5px", paddingTop:"13px", color:"royalblue", paddingLeft:"10px"}}>https://picsum.photos/seed/picsum/200/300 </h6>
        
        </div>
    </div>

 </div>
  )
}

export default Specific