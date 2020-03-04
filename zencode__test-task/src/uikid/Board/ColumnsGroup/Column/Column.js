import React from 'react'
import clases from './Column.module.css'
import HeaderColumn from '../ColumnHeader/ColumnHeader'

let Column = () => {
  return (
    <tr className={clases.column}>
      <HeaderColumn />
      <td className={clases.cell}>Имя 1</td>
      <td className={clases.cell}>Имя 1</td>
      <td className={clases.cell}>Имя 1</td>
    </tr>
  )
}
export default Column
