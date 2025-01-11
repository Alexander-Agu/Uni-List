import React, { useState } from 'react'
import Form from '../Form/Form'
import './uniapp.css'
import List from '../List/List';

const headline = document.getElementById('headline');
function UniApp() {
  const [uniData, setUniData] = useState([]);


  return (
    <article className='uniApp'>
        <p id='headline'>To get university lists fill in the country in the input box and get the uni list</p>

        {<Form setUniData={setUniData} />}
        {uniData.map(x => {
          const {domains, name, web_pages} = x;
          return <List id={domains[0]} name={name} web_page={web_pages} province={x["state-province"]} />
        })}
    </article>
  )
}

export default UniApp