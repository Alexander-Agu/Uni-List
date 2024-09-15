import React from 'react'
import Form from '../Form/Form'
import './uniapp.css'

function UniApp() {
  return (
    <article className='uniApp'>
        <p>To get university lists fill in the country in the input box and get the uni list</p>

        {<Form />}
    </article>
  )
}

export default UniApp