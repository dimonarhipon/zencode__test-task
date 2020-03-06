import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Input from '../Input/Input'
import Row from '../Row/Row'

class Table extends React.Component {
  state = {
    //  -----------------------------    Фамиля Имя
    titleName: 'Фамилия',
    textName1: 'Имя 1',
    textName2: 'Имя 2',
    textName3: 'Имя 3',
    //  -------------------------------- Название проекта
    titleProject: 'Название проекта',
    textProject1: 'Проект 1',
    textProject2: 'Проект 2',
    textProject3: 'Проект 3',
    // ---------------------------------  Статус
    titleStatus: 'Статус',
    textStatus1: 'Статус 1',
    textStatus2: 'Статус 2',
    textStatus3: 'Статус 3',
    // --------------------------------  Название месяцев
    mounth1: 'Февраль',
    mounth2: 'Март',
    mounth3: 'Апрель',
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
    dataRow: [
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
        { number: 14 },
        { number: 15 },
        { number: 16 },
        { number: 17 },
        { number: 18 },
        { number: 19 },
        { number: 20 },
        { number: 21 },
        { number: 22 },
        { number: 23 },
        { number: 24 },
        { number: 25 },
        { number: 26 },
      ],
      [
        { number: 27 },
        { number: 28 },
        { number: 29 },
        { number: 30 },
        { number: 31 },
        { number: 32 },
        { number: 33 },
        { number: 34 },
        { number: 35 },
        { number: 36 },
        { number: 37 },
        { number: 38 },
        { number: 39 },
      ],
    ],
  }
  // -------------------------------     Фамиля Имя
  changeTitleName = event => {
    this.setState({
      titleName: event.currentTarget.value,
    })
  }
  changeTextName1 = event => {
    this.setState({
      textName1: event.target.value,
    })
  }
  changeTextName2 = event => {
    this.setState({
      textName2: event.target.value,
    })
  }
  changeTextName3 = event => {
    this.setState({
      textName3: event.target.value,
    })
  }
  // ------------------------------------ Название проекта
  changeTitleProject = event => {
    this.setState({
      titleProject: event.currentTarget.value,
    })
  }
  changeTextProject1 = event => {
    this.setState({
      textProject1: event.target.value,
    })
  }
  changeTextProject2 = event => {
    this.setState({
      textProject2: event.target.value,
    })
  }
  changeTextProject3 = event => {
    this.setState({
      textProject3: event.target.value,
    })
  }
  // --------------------------------------  Статус
  changeTitleStatus = event => {
    this.setState({
      titleStatus: event.currentTarget.value,
    })
  }
  changeTextStatus1 = event => {
    this.setState({
      textStatus1: event.target.value,
    })
  }
  changeTextStatus2 = event => {
    this.setState({
      textStatus2: event.target.value,
    })
  }
  changeTextStatus3 = event => {
    this.setState({
      textStatus3: event.target.value,
    })
  }
  // -----------------------------------   Месяцы
  changeTextMounth1 = event => {
    this.setState({
      mounth1: event.target.value,
    })
  }
  changeTextMounth2 = event => {
    this.setState({
      mounth2: event.target.value,
    })
  }
  changeTextMounth3 = event => {
    this.setState({
      mounth3: event.target.value,
    })
  }
  // handleChange = (e) => {
  //   const { id, value } = e.currentTarget
  //   this.setState({ [id]: e.currentTarget.value })
  // }
  render() {
    return (
      <table className={clases.table}>
        <tbody className={clases.columnsGroup}>
          <Col
            changeTitleName={this.changeTitleName}
            changeTextName1={this.changeTextName1}
            changeTextName2={this.changeTextName2}
            changeTextName3={this.changeTextName3}
            titleName={this.state.titleName}
            textName1={this.state.textName1}
            textName2={this.state.textName2}
            textName3={this.state.textName3}
          />
          <Col
            changeTitleProject={this.changeTitleProject}
            changeTextProject1={this.changeTextProject1}
            changeTextProject2={this.changeTextProject2}
            changeTextProject3={this.changeTextProject3}
            titleProject={this.state.titleProject}
            textProject1={this.state.textProject1}
            textProject2={this.state.textProject2}
            textProject3={this.state.textProject3}
          />
          <Col
            changeTitleStatus={this.changeTitleStatus}
            changeTextStatus1={this.changeTextStatus1}
            changeTextStatus2={this.changeTextStatus2}
            changeTextStatus3={this.changeTextStatus3}
            titleStatus={this.state.titleStatus}
            textStatus1={this.state.textStatus1}
            textStatus2={this.state.textStatus2}
            textStatus3={this.state.textStatus3}
          />
        </tbody>
        <tfoot className={clases.workingHours}>
          <tr>
            <th colSpan='4' className={clases.month}>
              <Input
                mounth={this.state.mounth1}
                changeTextMounth1={this.changeTextMounth1}
              />
            </th>
            <th colSpan='4' className={clases.month}>
              <Input
                mounth={this.state.mounth2}
                changeTextMounth2={this.changeTextMounth2}
              />
            </th>
            <th colSpan='5' className={clases.month}>
              <Input
                mounth={this.state.mounth3}
                changeTextMounth3={this.changeTextMounth3}
              />
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

          <Row dataRow={this.state.dataRow} />
          <Row dataRow={this.state.dataRow} />
          <Row dataRow={this.state.dataRow} />
        </tfoot>
      </table>
    )
  }
}
export default Table

 // state = [
  //   {
  //     title: 'Фамилия',
  //     text1: 'Имя 1',
  //     text2: 'Имя 2',
  //     text3: 'Имя 3',
  //   },
  //   {
  //     title: 'Название проекта',
  //     text1: 'Проект 1',
  //     text2: 'Проект 2',
  //     text3: 'Проект 3',
  //   },
  //   {
  //     title: 'Статус',
  //     text1: 'Статус 1',
  //     text2: 'Статус 2',
  //     text3: 'Статус 3',
  //   },
  //   {
  //     id: 1,
  //     author: 'Саша Печкин',
  //     text: 'В четверг, четвертого числа...',
  //     bigText: 'в четыре с четвертью часа четыре'
  //   },
  // ]
// dataProject: {
//   title: '0',
//   text1: '1',
//   text2: 'Проект 2',
//   text3: 'Проект 3',
// },
// dataSatus: {
//   title: 'Статус',
//   text1: 'Статус 1',
//   text2: 'Статус 2',
//   text3: 'Статус 3',
// },
// dataMounth: {
//   mounth1: 'Февраль',
//   mounth2: 'Март',
//   mounth3: 'Апрель',
// },
// dataWeek: {
//   week1: 6,
//   week2: 7,
//   week3: 8,
//   week4: 9,
//   week5: 10,
//   week6: 11,
//   week7: 12,
//   week8: 13,
//   week9: 14,
//   week10: 15,
//   week11: 16,
//   week12: 17,
//   week13: 18,
// },
// dataRow: [
//   [
//     { number: 1 },
//     { number: 2 },
//     { number: 3 },
//     { number: 4 },
//     { number: 5 },
//     { number: 6 },
//     { number: 7 },
//     { number: 8 },
//     { number: 9 },
//     { number: 10 },
//     { number: 11 },
//     { number: 12 },
//     { number: 13 },
//   ],
//   [
//     { number: 14 },
//     { number: 15 },
//     { number: 16 },
//     { number: 17 },
//     { number: 18 },
//     { number: 19 },
//     { number: 20 },
//     { number: 21 },
//     { number: 22 },
//     { number: 23 },
//     { number: 24 },
//     { number: 25 },
//     { number: 26 },
//   ],
//   [
//     { number: 27 },
//     { number: 28 },
//     { number: 29 },
//     { number: 30 },
//     { number: 31 },
//     { number: 32 },
//     { number: 33 },
//     { number: 34 },
//     { number: 35 },
//     { number: 36 },
//     { number: 37 },
//     { number: 38 },
//     { number: 39 },
//   ],
// ],
