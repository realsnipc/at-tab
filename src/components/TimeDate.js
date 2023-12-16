import React, { useState, useEffect } from "react"

import './styles/TimeDate.scss'

export default () => {
  const [now, setNow] = useState(new Date())
  const [date, setDate] = useState()



  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000)
  }, [])

  useEffect(() => {

    function return12Hours() {
      let hour=now.toLocaleTimeString(undefined, {
        hour: "numeric"
      })
      if(hour>12){
        hour= hour-12
        console.log(hour)
      }
         setDate(hour + ':' + now.getMinutes())
    }
    return12Hours()
  }, [])
  

  return (
    <>
      <h1 className="time">
        {date}
      </h1>
      <h2 className="date">
        {now.toLocaleDateString(undefined, {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}
      </h2>
    </>
  )
}
