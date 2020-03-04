import React from 'react'
import clases from './Row.module.css'
import EditableCell from '../../../../Cells/EditableCell/EditableCell'

let Row = () => {
  return (
    <tr>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
      <td className={clases.cellhours}>
        <EditableCell />
      </td>
    </tr>
  )
}
export default Row
