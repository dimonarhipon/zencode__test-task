import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Input from '../Input/Input'
import Row from '../Row/Row'

class Table extends React.Component {
  render() {
    return (
      <table className={clases.table}>
        <tbody className={clases.columnsGroup}>
          <Col />
          <Col />
          <Col />
        </tbody>
        <tfoot className={clases.workingHours}>
          <tr>
            <th colSpan='4' className={clases.month}>
              <Input />
            </th>
            <th colSpan='4' className={clases.month}>
              <Input />
            </th>
            <th colSpan='5' className={clases.month}>
              <Input />
            </th>
          </tr>
          <Row />
          <Row />
          <Row />
          <Row />
        </tfoot>
      </table>
    )
  }
}
export default Table
