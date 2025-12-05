import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const baseurl = 'https://retoolapi.dev/yEtUV8/data';
  const [data, setData] = useState([]);
  

  const getData = async () => {
    try {
      const response = await axios.get(baseurl);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const postData = async () => {
      const newData = { 
        "Lakohely": "Lordran, Firelink Shrine",
        "Munkakor": "Dark Soulser",
        "TeljesNev": "John Darksoul",
       };
       const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      try {
        const response = await axios.post(baseurl, newData, config);
        console.log('Data posted:', response.data);
        getData(); // Refresh data
      } catch (error) {
        console.error('Error posting data:', error);
      }

      
  }

  const putData = async (id) => {
    const updatedData = { 
      "Lakohely": "Lands Between, Roundtable Hold",
      "Munkakor": "Elden Ringer",
      "TeljesNev": "John Eldenring",
     };
     const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const response = await axios.put(`${baseurl}/${id}`, updatedData, config);
      console.log('Data updated:', response.data);
      getData(); // Refresh data
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${baseurl}/${id}`);
      console.log('Data deleted:', response.data);
      getData(); // Refresh data
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  return (
    <>
      <h1>CRUD w axios</h1>
      <button>get data</button>
      <button>post data</button>
      <button>put data</button>
      <button>delete data</button>
    </>
  )
}

export default App
