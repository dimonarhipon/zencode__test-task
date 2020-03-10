import React from 'react'
import Input from '../Input/Input'
import clases from './Col.module.css'

let Column = props => {
  return (
    <th rowSpan={props.row} colSpan={props.col} className={clases.title}>
      <Input name={props.name} project={props.project} status={props.status} />
    </th>
  )
}
export default Column
