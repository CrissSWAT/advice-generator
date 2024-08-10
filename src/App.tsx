import { useEffect, useState } from 'react'
import './App.css'
import { Slip } from './api/interface/adviceInterface';
import { getAdvice } from './api/adviceGeneratorApi';

function App() {
  const [slip, setSlip] = useState<Slip>({id: 0, advice: "" })

  const fetchAdvice = () =>{
    getAdvice().then((data) =>{
      setSlip(data.slip);
    });
  };

  const handleClick = () =>{
    fetchAdvice();
  };

  useEffect(()=>{
    fetchAdvice();
  },[]);

  return (
    <>
      {slip.id === 0 ?(
        <p>Loading...</p>
      ) : ( 
        <>
        <span> {slip.id} </span>
        <h1> {slip.advice} </h1>
        <button onClick={handleClick}>Next</button>
        </>
      )}
    </>
  );
}

export default App
