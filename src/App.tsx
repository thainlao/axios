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
      <div>
        {data ? (
          <div>
            <h2>Meta Data:</h2>
            <ul>
              {Object.keys(data['Meta Data']).map((key, index) => (
                <li key={index}>
                  <strong>{key}:</strong> {(data['Meta Data'] as Record<string, string>)[key]}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
