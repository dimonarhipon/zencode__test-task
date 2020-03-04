import React from 'react'
import clases from './WorkingHours.module.css'
import MounthsWeeks from './MounthsWeeks/MounthsWeeks'
import RowsGroup from './RowsGroup/RowsGroup'
let WorkingHours = () => {
  return (
    <tfoot className={clases.workingHours}>
      <MounthsWeeks />
      <RowsGroup />
    </tfoot>
  )
}

export default WorkingHours
