import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

class ZombieForm extends Component {
  state = {
    name: '',
    gender: 'male',
    location: 'school',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <>
        <Card
          component="form"
          onSubmit={ev => {
            ev.preventDefault()
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 200,
            height: 600,
            padding: '32px 48px',
            margin: 64,
          }}
        >
          <TextField
            key="name"
            autoFocus
            fullWidth
            label="Zombie Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            style={{ margin: 8 }}
            placeholder="Steve"
          />
          <TextField
            key="gender"
            autoFocus
            fullWidth
            select
            label="Zombie Gender"
            value={this.state.gender}
            onChange={this.handleChange('gender')}
            style={{ margin: 8 }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
          <TextField
            key="location"
            select
            autoFocus
            fullWidth
            label="Zombie Location"
            value={this.state.location}
            onChange={this.handleChange('location')}
            style={{ margin: 8 }}
          >
            <MenuItem value="school">School</MenuItem>
            <MenuItem value="church">Church</MenuItem>
            <MenuItem value="warehouse">Warehouse</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.fire.createZombie(
                this.state.location,
                this.state.name,
                this.state.gender
              )
              this.setState({ name: '' })
            }}
          >
            Store Zombie
          </Button>
        </Card>
      </>
    )
  }
}

export default ZombieForm
