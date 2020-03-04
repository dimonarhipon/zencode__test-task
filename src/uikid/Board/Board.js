import React from 'react'
import clases from './Board.module.css'
import ColumnsGroup from './ColumnsGroup/ColumnsGroup'
import WorkingHours from './WorkingHours/WorkingHours'

class Board extends React.Component {
  state = {
    columnsData: [
      {
        nameData: {
          titleColumn: 'Фамилия Имя',
          columns: [{ text: 'Имя 1' }, { text: 'Имя 2' }, { text: 'Имя 3' }],
        },
      },
      {
        nameData: {
          titleColumn: 'Название проекта',
          columns: [
            { text: 'Проект 1' },
            { text: 'Проект 2' },
            { text: 'Проект 3' },
          ],
        },
      },
      {
        nameData: {
          titleColumn: 'Статус',
          columns: [
            { text: 'Статус 1' },
            { text: 'Статус 2' },
            { text: 'Статус 3' },
          ],
        },
      },
    ],
    mounthsData: [
      { title: 'Февраль', colSpan: 4 },
      { title: 'Март', colSpan: 4 },
      { title: 'Апрель', colSpan: 5 },
    ],
    weeksData: [
      { week: 6 },
      { week: 7 },
      { week: 8 },
      { week: 9 },
      { week: 10 },
      { week: 11 },
      { week: 12 },
      { week: 13 },
      { week: 14 },
      { week: 15 },
      { week: 16 },
      { week: 17 },
      { week: 18 },
    ],
    rowsData: [
      [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },
        { number: 11 },
        { number: 12 },
        { number: 13 },
      ],
      [
        { number: 11 },
        { number: 21 },
        { number: 31 },
        { number: 41 },
        { number: 51 },
        { number: 61 },
        { number: 71 },
        { number: 81 },
        { number: 91 },
        { number: 110 },
        { number: 111 },
        { number: 121 },
        { number: 131 },
      ],
      [
        { number: 111 },
        { number: 211 },
        { number: 311 },
        { number: 411 },
        { number: 511 },
        { number: 611 },
        { number: 711 },
        { number: 811 },
        { number: 911 },
        { number: 1011 },
        { number: 1111 },
        { number: 1211 },
        { number: 1311 },
      ],
    ],
  }

  render() {
    return (
      <table className={clases.table}>
        <ColumnsGroup state={this.state} />
        <WorkingHours state={this.state} />
      </table>
    )
  }
}
export default Board
