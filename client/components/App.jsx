import React from 'react'
import Header from './Header'
import CoachList from './CoachList'
import Calendar from './Calendar'
import Footer from './Footer'
import Nav from './Nav'

const App = () => {
  return (
    <>
      <Header />
      <div>
        <CoachList />
      </div>
      <div className='line'></div>
      <div className='container'>
        <Calendar/>
      </div>
      <Footer />
    </>
  )
}

export default App
