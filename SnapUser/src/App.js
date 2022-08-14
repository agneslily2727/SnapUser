import './App.css';
import { useEffect, useState } from 'react';
import DataCards from './DataCards';
function App() {
  const [data,setData] = useState([]);
  async function getData(){
    try {
      await fetch('https://randomuser.me/api/?results=100')
      .then(res=>{
        return res.json()
      })
      .then(datas => {
        let respose = datas.results
        setData(respose)
      }
      )
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  getData();
},[])
  return (
    <div className="App">
      {/* Header */}
    <div className='heading'>
      <h1 className='ui yellow header'>Snap Shot</h1>
    </div>
      {/* Content */}

    <div className='container content'>
    {data && data.map((item,indx)=>(
        <DataCards data={item} key={indx}/>
      ))}
    </div>
    </div>
  );
}

export default App;
