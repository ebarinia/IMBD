import { useState } from 'react'
import './App.css'
import FilmsContainer from './container/FilmsContainer'
import WatchlistContainer from './container/WatchlistContainer'
import Header from './components/header'


function App() {
  return (
    <>
    <div className='header'>
      <Header/>
    </div>
    <div className='containers'>
      <div className='films-container'>
        <FilmsContainer />
      </div>
      <div className='watchlist-container'>
        <WatchlistContainer/>
      </div>
    </div>
    </>
  )
}

export default App
