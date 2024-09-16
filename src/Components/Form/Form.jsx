import React, { useState } from 'react'
import List from '../List/List';
import './form.css'

const headline = document.getElementById('headline');

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