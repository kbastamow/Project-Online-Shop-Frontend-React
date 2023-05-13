import React from 'react'

const DateFormatter = (props) => {

const dateObj = new Date(props.dateString);
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