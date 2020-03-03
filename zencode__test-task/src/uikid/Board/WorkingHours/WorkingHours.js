import React from 'react'
import clases from './WorkingHours.module.css'
import MounthsWeeks from './MounthsWeeks/MounthsWeeks'
let WorkingHours = () => {
  return (
    <tfoot className={clases.workingHours}>
      <MounthsWeeks />
      <tr>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
      </tr>
      <tr>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
      </tr>
      <tr>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
        <td className={clases.cellhours}>0</td>
      </tr>
    </tfoot>
  )
}

export default WorkingHours
