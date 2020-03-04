import React, { Fragment } from 'react'
import clases from './Column.module.css'
import HeaderColumn from '../ColumnHeader/ColumnHeader'
import EditableCell from '../../../Cells/EditableCell/EditableCell'

let Column = props => {
  return (
    <Fragment>
      <tr className={clases.column}>
        <HeaderColumn titleColumn={props.nameData.titleColumn} />
        {props.nameData.columns.map(({ text }) => (
          <td className={clases.cell}>
            <EditableCell text={text}/>
          </td>
        ))}
      </tr>
    </Fragment>
  )
}
export default Column
