import React from 'react'
import clases from './Input.module.css'

let Input = props => {
  let {onChange, ...other} = props
  return <input className={clases.editable}  
  onChange={event => onChange(event.target.value)} 
  {...other}/>
}
export default Input
