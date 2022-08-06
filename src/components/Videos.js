import React from 'react'
import Videoitem  from '../components/Videoitem.js'
import "../styles/Videos.css"
function Videos({Video}) {
  return (
    <div className='Videos'>
      {
        Video.map((item,index)=>(
            <Videoitem image={item.image} index={index} key={item.image} name={item.name}/>
        ))
      }
    </div>
  )
}

export default Videos
