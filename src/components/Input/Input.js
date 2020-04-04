import React from 'react'
import clases from './Input.module.css'
import {debounce} from 'lodash'

let Input = props => {
  let {onChange, ...other} = props
  // onChange = debounce(onChange, 2000)
  return <input className={clases.editable}  
  onChange={event => onChange(event.target.value)} 
  {...other}
  />
}
export default Input
