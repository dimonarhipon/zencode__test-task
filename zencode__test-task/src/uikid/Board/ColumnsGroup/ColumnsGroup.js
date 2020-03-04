import React from 'react'
import clases from './ColumnsGroup.module.css'
import Column from './Column/Column'

let ColumnsGroup = () => {
  return (
    <tbody className={clases.columnsGroup}>
      <Column />
      <Column />
      <Column />
    </tbody>
  )
}
export default ColumnsGroup
