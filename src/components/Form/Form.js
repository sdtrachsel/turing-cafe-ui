import React from "react";
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
 


  handleChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value] })
  }

  clearFields = () =>{
      this.setState({
        name: '',
        date: '',
        time: '',
        number:''
      })
  }

  submitForm= (event) => {
    event.preventDefault()
    
    const newRes = {id:Date.now(), ...this.state}
    newRes.number = Number(newRes.number) 
    this.props.addReservation(newRes)
    this.clearFields()
  }

  render() {

    return (
      <form>
        <input type="text" name='name' placeholder="Name" value={this.state.name} onChange={event => this.handleChange(event)} />
        <input type="date" name='date' placeholder="Date" value={this.state.date} onChange={event => this.handleChange(event)} />
        <input type="text" name='time' placeholder="Time" value={this.state.time} onChange={event => this.handleChange(event)} />
        <input type="number" name='number' placeholder="Number of Guests" value={this.state.number} onChange={event => this.handleChange(event)} />
        <button onClick={event => this.submitForm (event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;