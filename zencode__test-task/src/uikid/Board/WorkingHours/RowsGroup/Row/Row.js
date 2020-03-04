import React from 'react'
import clases from './Row.module.css'
import EditableCell from '../../../../Cells/EditableCell/EditableCell'

let Row = props => {
  return (
    <tr>
      <td className={clases.cellhours}>
        <EditableCell number={props.rowsData} />
      </td>
    </tr>
  )
}
export default Row
