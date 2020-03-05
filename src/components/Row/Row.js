import React from 'react'
import Input from '../Input/Input'
import clases from './Row.module.css'

let Row = props => {
  return (
    <tr>
      {/* {props.Row_1.map(({ number }) => (
        <td className={clases.cellhours}>
          <Input number={number} />
        </td>
      ))} */}
      <td className={clases.cellhours}>
        <Input week={props.week1} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week2} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week3} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week4} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week5} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week6} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week7} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week8} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week9} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week10} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week11} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week12} />
      </td>
      <td className={clases.cellhours}>
        <Input week={props.week13} />
      </td>
    </tr>
  )
}
export default Row
