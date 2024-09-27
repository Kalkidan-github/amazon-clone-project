// import React from 'react',
import { carousel } from 'react-responsive-carousel'
import {img} from './data'
import  "react-responsive-carousel/lib/styles/carousel.min.css" 

function carouseleffect() {
    return (
        <div>
            <carousel>
                autoPlay={true}
                infiniteloop={true}
                showIndicators={false}
                showThumbs={false}
          
                {
                    img.map((imageItemLink)=> (
                   <img src={imageItemLink} />
                
                  ))}
        
          
            </carousel>
        </div>
    )
}



export default carouseleffect