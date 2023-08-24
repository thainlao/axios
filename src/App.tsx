import React, { useEffect, useState } from 'react';
import './App.css';
import { FinanceData, finance } from './api/request';
import axios, { AxiosResponse } from 'axios';

function App() {
  const [data, setData] = useState<FinanceData | null>(null);

  async function Finance() {
    try {
      const response: AxiosResponse<FinanceData> = await axios.request(finance);
      setData(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    Finance();
  }, []);

  return (
    <div className="App">
      NFT GENERATION
    </div>
  );
}

export default App;
