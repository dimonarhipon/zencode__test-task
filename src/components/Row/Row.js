import React from 'react'
import Input from '../Input/Input'
import clases from './Row.module.css'

let Row = props => {
  return (
    <tr>
      <td className={clases.cellhours}>
        <Input fullName={props.dataRowsBody.fullName }/>
      </td>
      <td className={clases.cellhours}>
        <Input nameProject={props.dataRowsBody.nameProject} />
      </td>
      <td className={clases.cellhours}>
        <Input status={props.dataRowsBody.status }/>
      </td>
      {props.dataRowsBody.months.Febrary.hours.map(hours => (
        <td className={clases.cellhours}>
          <Input hours={hours}/>
        </td>
      ))}
      {props.dataRowsBody.months.Marth.hours.map(hours => (
        <td className={clases.cellhours}>
          <Input hours={hours}/>
        </td>
      ))}
      {props.dataRowsBody.months.April.hours.map(hours => (
        <td className={clases.cellhours}>
          <Input hours={hours}/>
        </td>
      ))}
    </tr>
  )
}
export default Row
