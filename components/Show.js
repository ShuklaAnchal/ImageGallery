import React from 'react'
import icon from "@/public/imagelogo.jpg"
import Image from 'next/image'
import Link from 'next/link'

const Show = () => {
  return (
    <div>
         <div  className='uper'>
        <div  className='left'>
            <Image 
            src={icon}
            width={45}
            height={50}
            style={{position:"absolute",top:"18%" }}
            />
            <h1>Lorem Picsum</h1>
            <p>The Lorem Ipsum for photos.</p>
        </div>
        <div  className='right'>
         <img src="https://fastly.picsum.photos/id/565/536/354.jpg?hmac=SA-_3Bux2sMwQUQ2WKKymK-Axm3_0cuVrLyujSdaOzM" alt="" />
        </div>
     </div>
     <div  className='page2'>
           <h2>Image Gallery</h2>
           <p>Here you can view all the images Lorem Picsum provides. <br />
Get a specific image by adding /id/image to the start of the url.</p>
  <h3>https://picsum.photos/id/1/200/300</h3>
  <p>More detailed instructions can be found on the  <span  style={{ color:"royalblue"}}> <Link  href="/">main page.</Link></span> </p>
     </div>
    </div>
  )
}

export default Show