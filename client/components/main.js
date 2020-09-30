import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div>
          <Link to="/dashboard/profile/949c2e35-5c12-4223-a7ac-b4ffe277f933">Go To Profile</Link>
        </div>
        <div>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
