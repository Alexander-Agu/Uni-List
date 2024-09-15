import React, { useState } from 'react'
import './form.css'


const headline = document.getElementById('headline');

// Gets the univerity api and return the list
const universityList = async (country)=>{
  try{
    const getUniversityAPI = await fetch(`	http://universities.hipolabs.com/search?country=${country}`);
    
    const getList = getUniversityAPI.json();
    return getList;
  } catch{
    headline.textContext = 'Error Found, please try again'
  };
};

function Form() {
    const [form, setForm] = useState('');

  return (
    <div className='form' id='app'>
        <input type="text" onChange={(e) => {setForm(e.target.value)}}/>

        <button id='addBTN'>Get List</button>
    </div>
  )
}

export default Form