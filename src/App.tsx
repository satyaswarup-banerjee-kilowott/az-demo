import React, { useState, useEffect } from 'react';
// import httpTrigger from '../api/testApi/index'

import logo from './logo.svg';
import './App.css';

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { body } = await( await fetch(`/api/testApi`)).json();
      console.log(body);
      setData(body);
    })();
  });
  return (
    <div className="App">

    <div>{data}</div>
      
    </div>
  );
}

export default App;
