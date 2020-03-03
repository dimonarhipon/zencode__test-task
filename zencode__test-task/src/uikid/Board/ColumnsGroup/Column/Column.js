import React from 'react'
import clases from './Column.module.css'

let Column = () => {
  return (
    <tr className={clases.column}>
      <th className={clases.title}>Фамилия Имя</th>
      <td className={clases.cell}>Имя 1</td>
      <td className={clases.cell}>Имя 1</td>
      <td className={clases.cell}>Имя 1</td>
    </tr>
  )
}
export default Column
