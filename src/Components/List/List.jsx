import React from 'react'
import './list.css'
import { getUniList } from '../Form/Form'
function List() {
  return getUniList.map(x =>{

    return <div className='listContainer'>
        <h2 className='uni'>{x.name}</h2>
        
        <div className="uniDetails">
            <h2 className='province'>{}</h2>
            <a href={x.web_pages}>Visit Site</a>
        </div>
    </div>
  })

  
}

export default List