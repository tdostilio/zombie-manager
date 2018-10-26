import React, { Component } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MoreIcon from "@material-ui/icons/MoreVert"
import Card from "@material-ui/core/Card"
import Divider from "@material-ui/core/Divider"
import ZombieActions from "./ZombieActions"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Avatar from "@material-ui/core/Avatar"

const buildings = []

class ZombieList extends Component {
  render() {
    return (
      <>
        <Card>
          <List component="nav">
            <ListItem className="location-header">
              <ListItemText primary={this.props.location} />
            </ListItem>
            <Divider />
            {this.props.zombies ? (
              Object.keys(this.props.zombies).map((zombId, key) => {
                return (
                  <>
                    <ListItem
                      button
                      key={key}
                      divider
                      className="location-list"
                    >
                      <Avatar
                        alt="zombie"
                        src={
                          this.props.zombies[zombId].gender === "male"
                            ? "/assets/zombieMaleHeadshot.png"
                            : "/assets/femaleHeadshot.png"
                        }
                      />
                      <ListItemText primary={this.props.zombies[zombId].name} />
                      <ListItemSecondaryAction>
                        <ListItemIcon>
                          <ZombieActions />
                        </ListItemIcon>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </>
                )
              })
            ) : (
              <ListItem>
                <ListItemText primary="No Zombies" />
              </ListItem>
            )}
          </List>
        </Card>
      </>
    )
  }
}

export default ZombieList
