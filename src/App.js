import React, { Component } from "react"
import ZombieForm from "./ZombieForm"
import ZombieList from "./ZombieList"
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
    //create a listener for changes to the location
    window.fire.locationRef(location).on("value", snapshot => {
      //when there is a change to the location update the count of zombies
      let zombieObject = snapshot.val()
      if (zombieObject && Object.keys(zombieObject).length) {
        let zombieCount = Object.keys(zombieObject).length
        this.setState({ [location]: zombieCount })
      } else {
        //default to 0
        this.setState({ [location]: 0 })
      }
    })
  }

  componentDidMount() {
    //attach the listeners for all 3 locations
    this.updateCount("school")
    this.updateCount("warehouse")
    this.updateCount("church")
  }

  render() {
    return (
      <>
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
        <div className="Zombie-lists-container">
          <ZombieList location="Warehouse" />
          <ZombieList location="Church" />
          <ZombieList location="School" />
        </div>
      </>
    )
  }
}

export default App
