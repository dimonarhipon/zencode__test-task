import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Input from '../Input/Input'
import Row from '../Row/Row'

class Table extends React.Component {
  state = {
    dataName: {
      title: 'Фамилия Имя',
      text1: 'Имя 1',
      text2: 'Имя 2',
      text3: 'Имя 3',
    },
    dataProject: {
      title: 'Название проекта',
      text1: 'Проект 1',
      text2: 'Проект 2',
      text3: 'Проект 3',
    },
    dataSatus: {
      title: 'Статус',
      text1: 'Статус 1',
      text2: 'Статус 2',
      text3: 'Статус 3',
    },
    dataMounth: {
      mounth1: 'Февраль',
      mounth2: 'Март',
      mounth3: 'Апрель',
    },
    dataWeek: {
      week1: 6,
      week2: 7,
      week3: 8,
      week4: 9,
      week5: 10,
      week6: 11,
      week7: 12,
      week8: 13,
      week9: 14,
      week10: 15,
      week11: 16,
      week12: 17,
      week13: 18,
    },
    dataRow: {
      Row_1: [
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
      Row_2: [
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
      Row_3: [
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
    },
  }
  render() {
    return (
      <table className={clases.table}>
        <tbody className={clases.columnsGroup}>
          <Col
            title={this.state.dataName.title}
            text1={this.state.dataName.text1}
            text2={this.state.dataName.text2}
            text3={this.state.dataName.text3}
          />
          <Col
            title={this.state.dataProject.title}
            text1={this.state.dataProject.text1}
            text2={this.state.dataProject.text2}
            text3={this.state.dataProject.text3}
          />
          <Col
            title={this.state.dataSatus.title}
            text1={this.state.dataSatus.text1}
            text2={this.state.dataSatus.text2}
            text3={this.state.dataSatus.text3}
          />
        </tbody>
        <tfoot className={clases.workingHours}>
          <tr>
            <th colSpan='4' className={clases.month}>
              <Input mounth={this.state.dataMounth.mounth1} />
            </th>
            <th colSpan='4' className={clases.month}>
              <Input mounth={this.state.dataMounth.mounth2} />
            </th>
            <th colSpan='5' className={clases.month}>
              <Input mounth={this.state.dataMounth.mounth3} />
            </th>
          </tr>
          <Row
            week1={this.state.dataWeek.week1}
            week2={this.state.dataWeek.week2}
            week3={this.state.dataWeek.week3}
            week4={this.state.dataWeek.week4}
            week5={this.state.dataWeek.week5}
            week6={this.state.dataWeek.week6}
            week7={this.state.dataWeek.week7}
            week8={this.state.dataWeek.week8}
            week9={this.state.dataWeek.week9}
            week10={this.state.dataWeek.week10}
            week11={this.state.dataWeek.week11}
            week12={this.state.dataWeek.week12}
            week13={this.state.dataWeek.week13}
          />
          <Row Row_1={this.state.dataRow.Row_1} />
          <Row Row_2={this.state.dataRow.Row_2} />
          <Row Row_3={this.state.dataRow.Row_3} />
        </tfoot>
      </table>
    )
  }
}
export default Table
