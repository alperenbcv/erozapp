import React from 'react'
import TopBar from '../component/molecule/TopBar'
import './HomePage.css'

function HomePage() {
  return (
    <div className="container-fluid home-container">
        <div className="row">
            <TopBar/>
        </div>
    </div>
  )
}

export default HomePage