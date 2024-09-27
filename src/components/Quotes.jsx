import React from 'react'
import data from "./../data.js"
import Quote from "./Quote.jsx";

const Quotes = () => {
  
  return (
    data.map((ele,index)=>{
      return (<Quote data={ele} key={index}/>)
      })
  )
}

export default Quotes