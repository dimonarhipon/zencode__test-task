import React from 'react'
// import Input from '../Input/Input'
import clases from './Col.module.css'

let Column = props => {
  return (
    <th rowSpan={props.row} colSpan={props.col} className={clases.title}>
      {props.value}
    </th>
  )
}
export default Column
