import React from 'react'
import Form from '../Form/Form'
import './uniapp.css'
import List from '../List/List';

const headline = document.getElementById('headline');
function UniApp() {

  return (
    <article className='uniApp'>
        <p id='headline'>To get university lists fill in the country in the input box and get the uni list</p>

        {<Form />}
    </article>
  )
}

export default UniApp