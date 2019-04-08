import React from 'react';

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter'
  } else {
    return latitude < 0 ? 'winter' : 'summer'
  }
}

export default function SeasonDisplay(props) {
  const season = getSeason(props.latitude, new Date().getMonth() )

  console.log(season);

  return (
    <div>
      Season Display
    </div>
  )
}
