import React from 'react'
import Link from 'next/link'

const Specific = () => {
  return (
    <div  className='specific '>
    <div  className='left-1'>
        <div  className='texts'  style={{ position:"relative", left:"25%", top:"20%"}}>
        <h2  style={{ fontSize:"30px"}}>Specific Image</h2>
        <p  style={{ fontSize:"17px", marginTop:"5px"}}>Get a specific image by adding /id/image to the start of the url.</p>
        <h6  style={{ height:"3rem", width:"25rem", backgroundColor:"#EBEEF0", borderRadius:"5px", paddingTop:"13px", color:"royalblue", paddingLeft:"10px"}}>https://picsum.photos/id/237/200/300</h6>
        <h6>You can find a list of all the images <span><Link  href='/Images'>here.</Link></span></h6>
        </div>
    </div>
    <div  className='right-1'>
     <img  src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="" />
    </div>
 </div>
  )
}

export default Specific