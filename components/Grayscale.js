import React from 'react'
import Link from 'next/link'

const Grayscale = () => {
  return (
    <div  className='specific d-flex'  style={{ height:"50vh"}}>
    <div  className='left-1'>
        <div  className='texts'  style={{ position:"relative", left:"25%", top:"-5%"}}>
        <h2  style={{ fontSize:"30px"}}>Grayscale</h2>
        <p  style={{ fontSize:"17px", marginTop:"5px"}}>Get a grayscale image by appending ?grayscale to the end of the url.</p>
        <h6  style={{ height:"3rem", width:"25rem", backgroundColor:"#EBEEF0", borderRadius:"5px", paddingTop:"13px", color:"royalblue", paddingLeft:"10px"}}>https://picsum.photos/200/300?grayscale</h6>
        </div>
    </div>
    <div  className='right-1'>
     <img style={{ top:"-20%"}}  src="https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" alt="" />
    </div>
 </div>
  )
}

export default Grayscale