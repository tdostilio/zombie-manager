import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import ActionDialog from './ActionDialog'

class ZombieActions extends Component {
  state = {
    open: false,
    anchorEl: null,
    moveDialog: false,
    killDialog: false,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  openDialog = type => {
    this.setState({ [type]: true })
  }

  closeDialog = type => {
    this.setState({ [type]: false })
  }

  render() {
    const { zombie } = this.props
    const { anchorEl, moveDialog } = this.state
    return (
      <>
        <IconButton
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
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
          <MenuItem onClick={() => this.openDialog('moveDialog')}>
            <span>Move Zombie</span>
          </MenuItem>
          <MenuItem onClick={() => this.openDialog('killDialog')}>
            <span>Kill Zombie</span>
          </MenuItem>
        </Menu>
        <ActionDialog
          open={moveDialog}
          onClose={() => this.closeDialog('moveDialog')}
          location={zombie.location}
          zombie={zombie}
        />
      </>
    )
  }
}

export default ZombieActions
