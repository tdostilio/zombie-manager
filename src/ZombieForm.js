import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import logo from './logo.svg'

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
      <Card
        component="form"
        onSubmit={ev => {
          ev.preventDefault()
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 600,
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
          <option value="male">Male</option>
          <option value="female">Female</option>
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
          <option value="school">School</option>
          <option value="church">Church</option>
          <option value="warhouse">Warehouse</option>
        </TextField>
        <Button
          onClick={() =>
            window.fire.createZombie(
              this.props.totalCount + 1,
              this.state.location,
              this.state.name,
              this.state.gender
            )
          }
        >
          Store Captured Zombie
        </Button>
        <Typography>{`Warehouse: ${this.props.warehouse}`}</Typography>
        <Typography>{`Church: ${this.props.church}`}</Typography>
        <Typography>{`School: ${this.props.school}`}</Typography>
      </Card>
    )
  }
}

export default ZombieForm
