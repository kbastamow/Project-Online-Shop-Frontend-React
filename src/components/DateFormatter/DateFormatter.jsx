import React from 'react'

const DateFormatter = (props) => {

const myDate = "2023-04-09T18:16:50.000Z"
const dateObj = new Date(myDate);
const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});
    console.log(formattedDate)
  return (
    <>{formattedDate}</>
  )
}

export default DateFormatter