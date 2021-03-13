import React from "react";

const TodaysFood = (props) => {
  if (props.quantity===0)return (<div></div>);
  else
  return (
    <div className='todaysFood'>
      <span>{props.quantity} {props.name}</span>
      <span><button onClick={props.deleteOneMethod} className="button delete-btn is-danger is-small">Delete</button></span>
    </div>
  )
}


export default TodaysFood;