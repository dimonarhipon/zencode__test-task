import React from 'react'
import clases from './Board.module.css'
import ColumnsGroup from './ColumnsGroup/ColumnsGroup'
import WorkingHours from './WorkingHours/WorkingHours'

class Board extends React.Component {
  render() {
    return (
      <table className={clases.table}>
        <ColumnsGroup />
        <WorkingHours />
      </table>
    )
  }
}
export default Board
