import React from 'react'
import CreateTable from '../Table/CreateTable';
import './Home.css';

function Home() {

  return (
    <div className='homeCont'>
        <div className='homeCsvBtn'>
            <a href="http://localhost:8080/players/rating-history-csv">Download CSV File</a>
        </div>
        <div>
            <CreateTable />
        </div>
    </div>
  )
}

export default Home;