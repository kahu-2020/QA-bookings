import React from 'react'
import Header from './Header'
import CoachList from './CoachList'
import Calendar from './Calendar'
import Footer from './Footer'
import Welcome from './Welcome'

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Welcome/>
      </div>
      <div>
        <CoachList />
      </div>
      <div className='line'></div>
      <div>

      </div>
      <div className='container'>
        <Calendar/>
      </div>
      <Footer />
    </>
  )
}

export default App
