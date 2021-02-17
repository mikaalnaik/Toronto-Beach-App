import React from 'react'
import { Chart } from 'react-charts'

export default function LineChart({ beachData }) {
  console.log({beachData});

  const formattedBeachData = beachData.map(item => {
    return [
      item.sampleDate,
      item.eColiCount
    ]
  })
  return (
    <div>
      Chart
    </div>
  )
}
