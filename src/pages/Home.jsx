import React from 'react'

import Hero from '../components/section/Hero'
import Featured from '../components/section/Featured'

function Home() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-900">
        <div className="max-w-[85.5rem] mx-auto">
          <Hero />
        </div>
        <div className="max-w-7xl mx-auto">
          <Featured />
        </div>
      </div>
    </>
  )
}

export default Home