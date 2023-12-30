import React from 'react'

import Hero from '../components/section/Hero'
import NewArrivals from '../components/section/NewArrivals'

function Home() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-900">
        <Hero />
        <NewArrivals />
      </div>
    </>
  )
}

export default Home