import React, { Fragment } from 'react'
// import clases from './MounthsWeeks.module.css'
import Mounth from './Mounth/Mounth'
import Week from './Week/Week'

let MounthsWeeks = () => {
  return (
    <Fragment>
      <tr>
        <Mounth />
        <Mounth />
        <Mounth />
      </tr>
      <tr>
        <Week />
      </tr>
    </Fragment>
  )
}
export default MounthsWeeks
