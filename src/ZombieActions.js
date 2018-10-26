import React, { Component } from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"

import MoreIcon from "@material-ui/icons/MoreVert"

const styles = {
  iconButton: {
    marginRight: "10px",
    fontSize: "16px"
  }
}

class ZombieActions extends Component {
  state = {
    open: false,
    anchorEl: null,
    moveDialog: false,
    killDialog: false
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    return (
      <>
        <IconButton
          aria-owns={this.state.anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <span>Move Zombie</span>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <span>Kill Zombie</span>
          </MenuItem>
        </Menu>
      </>
    )
  }
}

export default ZombieActions
