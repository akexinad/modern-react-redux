import { useState, useEffect } from 'react';

export default () => {
  const [ latitude, setLatitude ] = useState(null)
  const [ longitude, setLongitude ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState('')

  useEffect( () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      (error) => setErrorMessage(error.message)
    )
  }, [])

  return [latitude, longitude, errorMessage]  
}
