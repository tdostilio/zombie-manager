import React, { Component } from 'react'
import ZombieForm from './ZombieForm'
import Fire from './lib/firebase'
import './App.css'

//make global firebase client available -- only global in app
window.fire = new Fire()

class App extends Component {
  state = {
    zombieTotal: 1,
    school: 0,
    church: 0,
    warehouse: 0,
  }

  updateCount

  componentDidMount() {
    window.fire.countZombies('school')
    window.fire.countZombies('warehouse')
    window.fire.countZombies('church')
    //make call to get number of zombies
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ZombieForm totalCount={this.state.zombieTotal} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
