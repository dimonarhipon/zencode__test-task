import React from 'react'
import clases from './Input.module.css'

let Input = props => {
  return <input className={clases.editable} {...props} />
}
export default Input
