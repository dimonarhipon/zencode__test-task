import React from 'react'
import clases from './Column.module.css'
import HeaderColumn from '../ColumnHeader/ColumnHeader'
import EditableCell from '../../../Cells/EditableCell/EditableCell'

let Column = () => {
  return (
    <tr className={clases.column}>
      <HeaderColumn />
      <td className={clases.cell}>
        <EditableCell />
      </td>
      <td className={clases.cell}>
        <EditableCell />
      </td>
      <td className={clases.cell}>
        <EditableCell />
      </td>
    </tr>
  )
}
export default Column
