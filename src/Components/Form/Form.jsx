import React, { useState } from 'react'
import './form.css'

function Form() {
    const [form, setForm] = useState('');
  return (
    <div className='form'>
        <input type="text" onChange={(e) => {setForm(e.target.value)}}/>

        <button id='addBTN'>Get List</button>
    </div>
  )
}

export default Form