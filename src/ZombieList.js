import React, { Component } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import CloseIcon from "@material-ui/icons/Close"

class ZombieList extends Component {
  render() {
    return (
      <>
        <List component="nav">
          <ListItem>
            <ListItemText primary={this.props.location} />
          </ListItem>
          {this.props.zombies ? (
            Object.keys(this.props.zombies).map((zombId, key) => {
              return (
                <ListItem key={key}>
                  <ListItemIcon>
                    <CloseIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.props.zombies[zombId].name} />
                </ListItem>
              )
            })
          ) : (
            <ListItem>
              <ListItemText primary="No Zombies" />
            </ListItem>
          )}
        </List>
      </>
    )
  }
}

export default ZombieList
