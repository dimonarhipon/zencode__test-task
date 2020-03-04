import React from 'react'
import clases from './WorkingHours.module.css'
import MounthsWeeks from './MounthsWeeks/MounthsWeeks'
import RowsGroup from './RowsGroup/RowsGroup'
let WorkingHours = props => {
  return (
    <tfoot className={clases.workingHours}>
      <MounthsWeeks
        mounthsData={props.state.mounthsData}
        weeksData={props.state.weeksData}
      />
      <RowsGroup rowsData={props.state.rowsData} />
    </tfoot>
  )
}

export default WorkingHours
