import React from 'react'

const DataCards = ({data}) => {
  return (
    <div className='cardItem row'>
      <div className='col'>
        <h5><em>{data.name.first}  {data.name.last}</em></h5>
        <p><i className="bi bi-geo-alt-fill"> </i>{data.location.city}</p>
        <p><i className="bi bi-telephone-fill"></i>  {data.phone}</p>
      </div>
      <img className='col' style={{width:'100px',height:'100px'}} src={data.picture.large} alt='not found'/>

    </div>
  )
}

export default DataCards