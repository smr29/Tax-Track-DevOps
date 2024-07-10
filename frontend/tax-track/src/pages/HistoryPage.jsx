import React from 'react'
import AppBar from '../components/AppBar';
import { useState, useEffect } from 'react';
import { useUser } from './auth/UserContext';
import axios from 'axios'

const HistoryPage = () => {

  const { user } = useUser()
  const [taxRecords, setTaxRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`/get_tax_records/${user.email}`).then(
  //     res => res.json()
  //   ).then(
  //     taxRecords => {
  //       setTaxRecords(taxRecords)
  //       setLoading(false)
  //       console.log(taxRecords)
  //     }
  //   ).catch(error => {
  //     console.log(error)
  //     setLoading(false);
  //     return <div>error</div>
  //   });
  // }, [user]);

  useEffect(() => {
    if (user) {
      console.log(user.email)
      axios.get(`https://tax-track.onrender.com/get_tax_records/${user.email}`)
        .then(response => {
          console.log(response)
          setTaxRecords(response.data['tax-records']);
          setLoading(false);
        }).catch(error => {
          if (error.response) {
            // The server responded with a status code outside the 2xx range
            console.log('Error response:', error.response.data.message);
          } else if (error.request) {
            // The request was made but no response was received
            console.log('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error message:', error.message);
          }
        });
        // .catch(error => {
        //   console.log(error)
        //   setLoading(false);
        //   return <div>error</div>
        // });
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <AppBar/>
    <div>
      <h2>Tax Records for { user.email }</h2>
      <table>
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Income from Salary</th>
            <th>Exempt Allowances</th>
            <th>Income from Interest</th>
          </tr>
        </thead>
        <tbody>
          {taxRecords.map((record, index) => (            
            <tr key={index}>
              <td>{record.email_id}</td>
              <td>{record.income_from_salary}</td>
              <td>{record.exempt_allowances}</td>
              <td>{record.income_from_interest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>    
  )
}

export default HistoryPage