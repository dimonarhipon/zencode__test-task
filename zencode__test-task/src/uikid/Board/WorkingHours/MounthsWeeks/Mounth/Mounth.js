import React, { Fragment } from 'react'
import clases from './Mounth.module.css'
import EditableCell from '../../../../Cells/EditableCell/EditableCell'

let Mounth = () => {
  return (
    <Fragment>
      <th colSpan="4" className={clases.month}>
        <EditableCell />
      </th>
    </Fragment>
  )
}
export default Mounth
