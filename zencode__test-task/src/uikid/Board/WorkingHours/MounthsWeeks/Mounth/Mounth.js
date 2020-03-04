import React, { Fragment } from 'react'
import clases from './Mounth.module.css'
import EditableCell from '../../../../Cells/EditableCell/EditableCell'

let Mounth = props => {
  return (
    <Fragment>
      <th colSpan={props.colSpan} className={clases.month}>
        <EditableCell title={props.title} />
      </th>
    </Fragment>
  )
}
export default Mounth
