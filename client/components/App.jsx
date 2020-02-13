import React from 'react'
import Header from './Header'
import CoachList from './CoachList'
import Calendar from './Calendar'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <CoachList/>
        <CoachList/>
        <CoachList/>
        <CoachList/>
      </div>
      <div className='container'>
        <Calendar/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
