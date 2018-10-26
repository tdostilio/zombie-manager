import React, { Component } from "react"
import ZombieList from "./ZombieList"

class ZombieDashboard extends Component {
  render() {
    return (
      <div className="zombie-dashboard">
        <ZombieList location="Warehouse" zombies={this.props.warehouse} />
        <ZombieList location="Church" zombies={this.props.church} />
        <ZombieList location="School" zombies={this.props.school} />
      </div>
    )
  }
}

export default ZombieDashboard
