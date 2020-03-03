import React, { Fragment } from 'react'
import clases from './Mounth.module.css'

let Mounth = () => {
  return (
    <Fragment>
      <th colSpan="4" className={clases.month}>
        Февраль
      </th>
    </Fragment>
  )
}
export default Mounth
