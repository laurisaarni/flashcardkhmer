import React, { Component } from 'react'
import Footer from '../Footer'
import Appbar from '../Appbar'
import AddCard from '../../containers/AddCard'
import VisibleCardList from '../../containers/VisibleCardList'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Appbar />
        <AddCard />
        <hr/>
        <Footer />
        <hr/>
        <VisibleCardList />
      </div>
    )
  }
}

export default App
