import React from 'react'

import Hero from '../components/section/Hero'
import Featured from '../components/section/Featured'

function Home() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-900">
        <Hero />
        <Featured />
      </div>
    </>
  )
}

export default Home