import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  dialogContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 400,
  },
}

class ActionDialog extends Component {
  state = {
    location: this.props.location,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  filterLocations = () => {
    let locations = ['school', 'church', 'warehouse']
    let indexOfcurrent = locations.indexOf(this.props.zombie.location)
    if (indexOfcurrent > -1) {
      locations.splice(indexOfcurrent, 1)
      return locations
    }
    //otherwise return original locations array
    return locations
  }

  render() {
    const { location } = this.state
    const { open, onClose, zombie } = this.props
    return (
      <Dialog open={open} onClose={onClose} style={styles.dialogContainer}>
        <DialogTitle style={{ display: 'flex', justifyContent: 'center' }}>
          {`Move ${zombie.name}?`}
        </DialogTitle>

        <DialogContent>
          <Avatar
            alt="zombie"
            src={
              zombie.gender === 'male'
                ? '/assets/maleHeadshot.png'
                : '/assets/femaleHeadshot.png'
            }
            style={{ height: 128, width: 128 }}
          />
          <TextField
            key="location"
            select
            autoFocus
            fullWidth
            label="To Where"
            value={location}
            onChange={this.handleChange('location')}
            style={{ margin: 8 }}
          >
            {this.filterLocations().map((availableLocation, key) => (
              <MenuItem value={availableLocation} key={key}>
                {availableLocation}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button
            onClick={() =>
              window.fire.moveZombie(this.state.location, this.props.zombie)
            }
          >
            Move
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ActionDialog
