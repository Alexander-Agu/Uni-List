import React from 'react'
import './list.css'

// Gets the univerity api and return the list
const universityList = async (country)=>{
  try{
    const getUniversityAPI = await fetch(`http://universities.hipolabs.com/search?country=South Africa`);
    
    const getList = getUniversityAPI.json();

    return getList;

  } catch{
    headline.textContext = 'Error Found, please try again'
  };
};
const getUniList = await universityList();

function List() {
  return getUniList.map(x =>{
    return <div className='listContainer' key={x.domains[0]}>
        <h2 className='uni'>{x.name}</h2>
        
        <div className="uniDetails">
            <h2 className='province'>{x['state-province']}</h2>
            <a href={x.web_pages}>Visit Site</a>
        </div>
    </div>
  })
}

export default List