const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
            .then(response => {
              if(!response.ok){
                throw new Error (response.message)
              }
              return response.json()
            })            
}

export default getReservations;