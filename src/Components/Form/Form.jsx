import React, { useEffect, useState } from 'react'
import List from '../List/List';
import './form.css'

const headline = document.getElementById('headline');

function Form({setUniData}) {
  const [form, setForm] = useState('South Africa');

  useEffect(()=>{
    const fetchUnis = async () => {
      const fetchData = await fetch(`http://universities.hipolabs.com/search?country=${form}`);
      const data = await fetchData.json();

      setUniData(data);
    }
    fetchUnis();
  }, [form])

  return (
    <div className='form' id='app'>
        <input type="text" onChange={(e) => {setForm(e.target.value)}} value={form}/>

        <button id='addBTN'>Get List</button>
    </div>
  )
}
export default Form