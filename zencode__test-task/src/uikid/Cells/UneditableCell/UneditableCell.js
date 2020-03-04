import React, { Fragment } from 'react'
import clases from './UneditableCell.module.css'

let UneditableCell = props => {
  return (
    <Fragment>
      <td className={clases.unditableWeek}>{props.week}</td>
    </Fragment>
  )
}
export default UneditableCell
