import './list.css'

function List({domain, name, province, web_page}) {

  return <div className='listContainer' key={name}>
      <h2 className='uni'>{name}</h2>
      
      <div className="uniDetails">
          <h2 className='province'>{province}</h2>
          <a href={web_page}>Visit Site</a>
      </div>
  </div>

}

export default List