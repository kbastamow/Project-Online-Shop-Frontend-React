import React from 'react'
import "./DateComparer.scss"

const DateComparer = (props) => {
    //Date comparer

    const dataBaseDate = new Date(props.dateString);

    const today = new Date();

    //One day - 86400000 milliseconds
    const differenceInDays = Math.abs(Math.round((today - dataBaseDate) / 86400000));
    console.log(differenceInDays)
    if (differenceInDays < 7) {  
  return <span className="new-badge badge ms-auto"> New </span>
     } else {
    return <></>
     }
}

export default DateComparer