import React from 'react'
import clases from './ColumnsGroup.module.css'

let ColumnsGroup = () => {
  return (
    <tbody className={clases.columnsGroup}>
      <tr className={clases.column}>
        <th className={clases.title}>Фамилия Имя</th>
        <td className={clases.cell}>Имя 1</td>
        <td className={clases.cell}>Имя 1</td>
        <td className={clases.cell}>Имя 1</td>
      </tr>
      <tr className={clases.column}>
        <th className={clases.title}>Название проекта</th>
        <td className={clases.cell}>Проект 1</td>
        <td className={clases.cell}>Проект 2</td>
        <td className={clases.cell}>Проект 3</td>
      </tr>
      <tr className={clases.column}>
        <th className={clases.title}>Статус</th>
        <td className={clases.cell}>1</td>
        <td className={clases.cell}>2</td>
        <td className={clases.cell}>3</td>
      </tr>
    </tbody>
  )
}
export default ColumnsGroup
