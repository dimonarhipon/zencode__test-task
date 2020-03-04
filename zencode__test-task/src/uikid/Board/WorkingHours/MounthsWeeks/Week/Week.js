import React, { Fragment } from 'react'
// import clases from './Week.module.css'
import UneditableCell from '../../../../Cells/UneditableCell/UneditableCell'

let Week = props => {
  return (
    <Fragment>
      {props.weeksData.map(({ week }) => (
        <UneditableCell week={week} />
      ))}
    </Fragment>
  )
}
export default Week
