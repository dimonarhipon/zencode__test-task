import React from 'react'
import clases from './ColumnsGroup.module.css'
import Column from './Column/Column'

let ColumnsGroup = props => {
  return (
    <tbody className={clases.columnsGroup}>
      {props.state.columnsData.map(({ nameData }) => (
        <Column nameData={nameData} />
      ))}
    </tbody>
  )
}
export default ColumnsGroup
