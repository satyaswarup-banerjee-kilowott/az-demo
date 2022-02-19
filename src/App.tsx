import { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import apiAx from './apiAx'


import './App.css';

function App() {
 //AXIOS CALL
  const [posts , setPosts] = useState([]);

  useEffect(() =>{

    const fetchResponse = async () =>{
      try{

        const response = await apiAx.get('/api/testApi');
        setPosts(response.data);

      }catch(err:any){

        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else{
          console.log(`Error: ${err.message}`)
        }

        
      }
    }

    fetchResponse();

  }, [])


  
  return (
    <div className="App">
    {/* Axios call */}
    <h1>The Api is...</h1>
    <div>
      {posts}
    </div>
      
    </div>
  );
}

export default App;
