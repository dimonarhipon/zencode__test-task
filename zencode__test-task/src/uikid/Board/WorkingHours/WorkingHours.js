import React from 'react'
import clases from './WorkingHours.module.css'
let WorkingHours = () => {
  return (
    <tfoot className={clases.workingHours}>
      <tr>
        <th colSpan="4" className={clases.month}>
          Февраль
        </th>
        <th colSpan="4" className={clases.month}>
          Март
        </th>
        <th colSpan="5" className={clases.month}>
          Апрель
        </th>
      </tr>
      <tr>
        <td className={clases.week}>6</td>
        <td className={clases.week}>7</td>
        <td className={clases.week}>8</td>
        <td className={clases.week}>9</td>
        <td className={clases.week}>10</td>
        <td className={clases.week}>11</td>
        <td className={clases.week}>12</td>
        <td className={clases.week}>13</td>
        <td className={clases.week}>14</td>
        <td className={clases.week}>15</td>
        <td className={clases.week}>16</td>
        <td className={clases.week}>17</td>
        <td className={clases.week}>18</td>
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
