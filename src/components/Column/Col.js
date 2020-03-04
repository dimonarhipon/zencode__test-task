import React, { Fragment } from 'react'
import Input from '../Input/Input'
import clases from './Col.module.css'

let Column = props => {
  return (
    <Fragment>
      <tr className={clases.column}>
        <th className={clases.title}>
          <Input />
        </th>
        <td className={clases.cell}>
          <Input />
        </td>
        <td className={clases.cell}>
          <Input />
        </td>
        <td className={clases.cell}>
          <Input />
        </td>
      </tr>
    </Fragment>
  )
}
export default Column
