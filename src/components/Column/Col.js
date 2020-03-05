import React, { Fragment } from 'react'
import Input from '../Input/Input'
import clases from './Col.module.css'

let Column = props => {
  return (
    <Fragment>
      <tr className={clases.column}>
        <th className={clases.title}>
          <Input title={props.title}/>
        </th>
        <td className={clases.cell}>
          <Input text={props.text1}/>
        </td>
        <td className={clases.cell}>
          <Input text={props.text2}/>
        </td>
        <td className={clases.cell}>
          <Input text={props.text3}/>
        </td>
      </tr>
    </Fragment>
  )
}
export default Column
