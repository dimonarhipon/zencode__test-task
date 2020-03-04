import React, { Fragment } from 'react'
// import clases from './MounthsWeeks.module.css'
import Mounth from './Mounth/Mounth'
import Week from './Week/Week'

let MounthsWeeks = props => {
  return (
    <Fragment>
      <tr>
        {props.mounthsData.map(({ title, colSpan }) => (
          <Mounth title={title} colSpan={colSpan} />
        ))}
      </tr>
      <tr>
        <Week weeksData={props.weeksData} />
      </tr>
    </Fragment>
  )
}
export default MounthsWeeks
