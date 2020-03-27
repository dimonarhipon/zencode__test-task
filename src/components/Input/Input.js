import React from 'react'
import clases from './Input.module.css'

let Input = props => {
  return <input className={clases.editable}  
  // onChange={(event) => (event.target.value)} 
  {...props}/>
}
export default Input
