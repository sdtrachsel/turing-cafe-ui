const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.message)
      }
      return response.json()
    })
}

const postReservation = (newRes) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify(newRes),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.message)
      }
      return response.json()
    })
}

const deleteReservation = (resID) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${resID}`, {
    method: 'Delete'
    }
  )
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(response.message)
      }
      return response.json()
    }) 
}

export { getReservations, postReservation, deleteReservation };