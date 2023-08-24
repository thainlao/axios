import axios from 'axios';

export const finance = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      function: 'FX_WEEKLY',
      from_symbol: 'EUR',
      to_symbol: 'USD',
      datatype: 'json'
    },
    headers: {
      'X-RapidAPI-Key': '8a6d9fb291mshfb63ccc54d3ed58p1a558ejsn1c75f8ec6346',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  export interface FinanceData {
    "Meta Data": {
      Information: string;
      "From Symbol": string;
      "To Symbol": string;
      "Last Refreshed": string;
      "Time Zone": string;
    };
    "Time Series FX (Weekly)": {
      [date: string]: {
      };
    };
  }