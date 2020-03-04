import React, { Fragment } from 'react'
import Row from './Row/Row'
let RowsGroup = props => {
  return (
    <Fragment>
      {props.rowsData.map(() => (
        <Row rowsData={props.rowsData} />
      ))}
    </Fragment>
  )
}
export default RowsGroup
