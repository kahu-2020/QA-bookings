import React from 'react'
import Header from './Header'
import CoachList from './CoachList'
import Calendar from './Calendar'
import Footer from './Footer'
import Nav from './Nav'

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Nav />
      </div>
      <div className='container'>
        <CoachList />
        <CoachList />
        <CoachList />
        <CoachList />
      </div>
      <div className='line'></div>
      {/* <div className='container'>
        <Calendar/>
      </div> */}
      <Footer />
    </div>
  )
}

export default App
