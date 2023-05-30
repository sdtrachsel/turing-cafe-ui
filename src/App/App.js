import React, { Component } from 'react';
import './App.css'
import getReservations from '../apiCalls';
import Reservation from '../Reservation/Reservation';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(data =>{
        this.setState({reservations: data}, () => {
          console.log(this.state.reservations)
        })
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

        </div>
        <div className='resy-container'>
          {allReservations}
        </div>
      </div>
    )
  }
}

export default App;
