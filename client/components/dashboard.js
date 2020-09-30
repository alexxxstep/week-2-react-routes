import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id="title">
          Dashboard
          <div>
            <Link to="/dashboard/profile/949c2e35-5c12-4223-a7ac-b4ffe277f933">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
