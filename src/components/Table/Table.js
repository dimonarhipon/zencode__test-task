import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
// import Input from '../Input/Input'
import Row from '../Row/Row'

class Table extends React.Component {
  render() {
    return (
      <table className={clases.table}>
        <thead className={clases.columnsGroup}>
          <tr>
            <Col row={2} text={"Фамилия Имя"}/>
            <Col row={2}/>
            <Col row={2}/>
            <Col col={4}/>
            <Col col={4}/>
            <Col col={5}/>
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
        </thead>
        <tbody className={clases.workingHours}>
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    )
  }
}
export default Table
