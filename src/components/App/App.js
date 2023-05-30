import React, { Component } from 'react';
import './App.css'
import getReservations from '../../apiCalls';
import Reservation from '../Reservation/Reservation';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
    }
  }

  addReservation = (newRes) =>{
    this.setState({ reservations: [...this.state.reservations, newRes]})
  }

  componentDidMount = () => {
    getReservations()
      .then(data =>{
        console.log(data)
        this.setState({reservations: data})
      })
      .catch(err => {
        console.log(err.message)
      })

  }

  render() {
    const allReservations = this.state.reservations.map(res => {
      return <Reservation key={res.id} resDetails={res} />
    })
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {allReservations}
        </div>
      </div>
    )
  }
}

export default App;
