import React, { Component } from "react"
import ZombieForm from "./ZombieForm"
import Fire from "./lib/firebase"
import "./App.css"

//make global firebase client available -- only global in app
window.fire = new Fire()

class App extends Component {
  state = {
    zombieTotal: 1,
    school: 0,
    church: 0,
    warehouse: 0
  }

  updateCount = async location => {
    console.log("calling await")
    let n = await window.fire.countZombies(location)
    console.log(`total number of zombs at ${location} is ${n}`)
    this.setState({ [location]: n })
  }

  componentDidMount = async () => {
    this.updateCount("school")
    this.updateCount("warehouse")
    this.updateCount("church")
    //make call to get number of zombies
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ZombieForm
            totalCount={this.state.zombieTotal}
            warehouse={this.state.warehouse}
            school={this.state.school}
            church={this.state.church}
          />
        </header>
      </div>
    )
  }
}

export default App
