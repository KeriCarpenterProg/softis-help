import { findAllByDisplayValue } from '@testing-library/react';
import React, {useState} from 'react';
import user from '../utils/user';

// This file works but has been superceded by FetchGameData.  
// Only use this if that fails.  
// Delete this file when I'm confident the other works

function FetchAPI() {
    const [data,setData] = useState([]);

const apiGet = () => {
   fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((json) => {
    console.log(json.results[0]);
    console.log(user[0]);
    user[1]=json.results[0];
    console.log(user[1]);
    setData(json.results[0]);
  })
}

return(
    <div>
        My API <br />

        <button onClick={apiGet}>Fetch API</button>
        <p>{JSON.stringify(data)}</p>
        <p>These should be the same</p>
        <p>{JSON.stringify(user[1])}</p>
    </div>
)
}

export default FetchAPI;