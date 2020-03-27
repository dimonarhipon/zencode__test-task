import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Input from '../../components/Input/Input'
import ChangeBg from '../ChangeBg/ChangeBg'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import produce from 'immer'

export let Tr = props => {
  return <tr {...props}></tr>
}
export let Td = props => {
  return <td {...props}></td>
}
const getMonths = () => {
  let months = []
  for (let i = 0; i < 12; i++) {
    if (i === 0 || i === 3 || i === 6 || i === 8 || i === 11) {
      months.push([
        { number: i },
        { number: i },
        { number: i },
        { number: i },
        { number: i },
      ])
    } else {
      months.push([{ number: i }, { number: i }, { number: i }, { number: i }])
    }
  }
  return months
}

class Table extends React.Component {
  state = {
    dataRowsHead: {
      name: 'Фамилия Имя',
      project: 'Проект',
      status: 'Статус',
      months: [
        { name: 'Январь', weeks: [1, 2, 3, 4, 5] },
        { name: 'Февраль', weeks: [6, 7, 8, 9] },
        { name: 'Март', weeks: [10, 11, 12, 13] },
        { name: 'Апрель', weeks: [14, 15, 16, 17, 18] },
        { name: 'Май', weeks: [19, 20, 21, 22] },
        { name: 'Июнь', weeks: [23, 24, 25, 26] },
        { name: 'Июль', weeks: [27, 28, 29, 30, 31] },
        { name: 'Август', weeks: [32, 33, 34, 35] },
        { name: 'Сентябрь', weeks: [36, 37, 38, 39, 40] },
        { name: 'Октябрь', weeks: [41, 42, 43, 44] },
        { name: 'Ноябрь', weeks: [45, 46, 47, 48] },
        { name: 'Декабрь', weeks: [49, 50, 51, 52, 53] },
      ],
    },
    dataRowsBody: [
      {
        fullName: 'Имя 1',
        nameProject: 'Проект 1',
        selectedValue: 'Идёт',
        months: getMonths(),
      },
      {
        fullName: 'Имя 1',
        nameProject: 'Проект 1',
        selectedValue: 'Идёт',
        months: getMonths(),
      },
      {
        fullName: 'Имя 1',
        nameProject: 'Проект 1',
        selectedValue: 'Идёт',
        months: getMonths(),
      },
    ],
    dataStatus: {
      statuses: [
        { text: 'Идёт' },
        { text: 'Согласован старт' },
        { text: 'Завершается' },
      ],
      input: '0',
      value: 'Пример',
    },
    dataColor: {
      colors: [
        { color: '#388E3C', title: 'Загрузка подтверждена' },
        { color: '#303F9F', title: 'Загрузка запланирована' },
        { color: '#e53935', title: 'Простой' },
      ],
      value: 'Пример',
      input: '#FFEA00',
    },
    showModalStatus: false,
    showModalColor: false,
  }
  // -----------------------  Добавление / Удаление разработчика
  addDeveloper = () => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item.push({
        fullName: 'Имя',
        nameProject: 'Проект',
        selectedValue: 'Идёт',
        months: getMonths(),
      })
    })
    this.setState({ dataRowsBody })
  }
  deleteDeveloper = () => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item.pop()
    })
    this.setState({ dataRowsBody })
  }
  // -----------------------  Добавление / Удаление проекта разработчику
  addProject = indexRow => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item.splice(indexRow + 1, 0, {
        fullName: '',
        nameProject: '',
        selectedValue: '',
        months: getMonths(),
      })
    })
    this.setState({ dataRowsBody })
  }
  deleteProject = indexRow => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item.splice(indexRow, 1)
    })
    this.setState({ dataRowsBody })
  }
  // ------------------------ Обработчики редактирования Статуса
  addStatus = () => {
    let data = Object.freeze(this.state.dataStatus)
    let value = this.state.dataStatus.value
    let dataStatus = produce(data, item => {
      item.statuses.push({
        text: value,
      })
      item.value = ''
    })
    this.setState({ dataStatus })
  }
  deleteStatus = statusIndex => {
    let data = Object.freeze(this.state.dataStatus)
    let dataStatus = produce(data, item => {
      item.statuses.splice(statusIndex, 1)
    })
    this.setState({ dataStatus })
  }
  showModalStatus = () => {
    let showModalStatus = !this.state.showModalStatus
    this.setState({ showModalStatus })
  }
  //  ----------------------  Обработчики редактирования Цвета
  addColor = () => {
    let data = Object.freeze(this.state.dataColor)
    let input = this.state.dataColor.input
    let value = this.state.dataColor.value
    let dataColor = produce(data, item => {
      item.colors.push({
        color: input,
        title: value,
      })
      item.value = ''
      item.input = ''
    })
    this.setState({ dataColor })
  }
  deleteColor = colorIndex => {
    let data = Object.freeze(this.state.dataColor)
    let dataColor = produce(data, item => {
      item.colors.splice(colorIndex, 1)
    })
    this.setState({ dataColor })
  }
  handlerChangeColor = event => {
    let data = Object.freeze(this.state.dataColor)
    let dataColor = produce(data, item => {
      item.input = event.target.value
    })
    this.setState({ dataColor })
  }
  handlerChangeTitleColor = event => {
    let data = Object.freeze(this.state.dataColor)
    let dataColor = produce(data, item => {
      item.value = event.target.value
    })
    this.setState({ dataColor })
  }
  showModalColor = () => {
    let showModalColor = !this.state.showModalColor
    this.setState({ showModalColor })
  }
  // -----------------------  Обработчик редактирования имени разработчика
  handlerChangefullName = (indexRow, event) => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item[indexRow].fullName = event.target.value
    })
    this.setState({ dataRowsBody })
  }
  //  вместо fullName - ещё один параметр
  // -----------------------  Обработчик редактирования названия проекта
  handlerChangeNameProject = (indexRow, event) => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item[indexRow].nameProject = event.target.value
    })
    this.setState({ dataRowsBody })
  }
  // ------------------------ Обработчик выбора текущего статуса
  handlerSelectedStatus = (indexRow, event) => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item[indexRow].selectedValue = event.target.value
    })
    this.setState({ dataRowsBody })
  }
  // -----------------------  Обработчик редактирования часов в любом месяце
  handlerChangeMonths = (monthsIndex, event, month, indexRow) => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item[indexRow].months[month][monthsIndex].number = event.target.value
    })
    this.setState({ dataRowsBody })
  }
  //  --------------------- Обработчик заливки фона ячейки
  handleChangeComplete = (monthsIndex, color, month, indexRow) => {
    let data = Object.freeze(this.state.dataRowsBody)
    let dataRowsBody = produce(data, item => {
      item[indexRow].months[month][monthsIndex].background = color.hex
    })
    this.setState({ dataRowsBody })
  }
  //  --------------------- Обработчик открытия окна заливки фона ячейки
  onShow = (monthsIndex, month, indexRow) => {
    let data = Object.freeze(this.state.dataRowsBody)
    let show = data[indexRow].months[month][monthsIndex].show
    let dataRowsBody = produce(data, item => {
      item[indexRow].months[month][monthsIndex].show = !show
    })
    this.setState({ dataRowsBody })
  }
  onClose = () => {}
  componentDidUpdate() {
    const state = JSON.stringify(this.state)
    localStorage.setItem('user', state)
  }
  componentDidMount() {
    let state = Object.freeze(this.state)
    state = JSON.parse(localStorage.getItem('user'))
    this.setState(state)
  }
  now = new Date()
  render() {
    let month = []
    for (let i = 0; i < 4; i++) {
      month.push(this.now.getMonth() + i)
    }
    // получаю число 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11
    return (
      <>
        <table className={clases.table}>
          <thead className={clases.columnsGroup}>
            <Tr>
              <Col row={2} value={this.state.dataRowsHead.name} />
              <Col row={2} value={this.state.dataRowsHead.project} />
              <Col row={2} value={this.state.dataRowsHead.status} />
              {month.map(item => (
                <Col key={item}
                  col={this.state.dataRowsHead.months[item].weeks.length}
                  value={this.state.dataRowsHead.months[item].name}
                />
              ))}
            </Tr>
            <Tr>
              {month.map((element, index) =>
                this.state.dataRowsHead.months[month[index]].weeks.map(item => (
                  <Td key={item} className={clases.week}>{item}</Td>
                )),
              )}
            </Tr>
          </thead>
          <tbody className={clases.workingHours}>
            {this.state.dataRowsBody.map((item, indexRow) => (
              <Tr key={indexRow}>
                <Td className={clases.cellhours}>
                  <Input
                    value={this.state.dataRowsBody[indexRow].fullName}
                    onChange={event =>
                      this.handlerChangefullName(indexRow, event)
                    }
                  />
                </Td>
                <Td className={clases.cellhours}>
                  <Input
                    value={this.state.dataRowsBody[indexRow].nameProject}
                    onChange={event =>
                      this.handlerChangeNameProject(indexRow, event)
                    }
                  />
                  <Button onClick={() => this.addProject(indexRow)}>+</Button>
                  <Button onClick={() => this.deleteProject(indexRow)}>
                    -
                  </Button>
                </Td>
                <Td className={clases.cellhours}>
                  <select
                    value={this.state.dataRowsBody[indexRow].selectedValue}
                    onChange={event =>
                      this.handlerSelectedStatus(indexRow, event)
                    }
                  >
                    {this.state.dataStatus.statuses.map(({ text }) => (
                      <option key={text} value={text}>{text}</option>
                    ))}
                  </select>
                </Td>
                {month.map((element, index) =>
                  this.state.dataRowsBody[indexRow].months[month[index]].map(
                    (item, monthsIndex) => (
                      <Td key={monthsIndex}
                        className={clases.cellhours}
                        style={{ backgroundColor: item.background }}
                      >
                        <Input
                          value={item.number}
                          onChange={event =>
                            this.handlerChangeMonths(
                              monthsIndex,
                              event,
                              month[index],
                              indexRow,
                            )
                          }
                        />
                        <ChangeBg
                          show={item.show}
                          background={item.background}
                          onClick={() =>
                            this.onShow(monthsIndex, month[index], indexRow)
                          }
                          onChangeComplete={color =>
                            this.handleChangeComplete(
                              monthsIndex,
                              color,
                              month[index],
                              indexRow,
                            )
                          }
                        />
                      </Td>
                    ),
                  ),
                )}
              </Tr>
            ))}
          </tbody>
        </table>
        <section className={clases.control}>
          <Button
            className={clases.button}
            onClick={this.addDeveloper}
            children={'Добавить разработчика'}
          />
          <Button
            className={clases.button}
            onClick={this.deleteDeveloper}
            children={'Удалить разработчика'}
          />
          <Button
            className={clases.button}
            onClick={this.showModalStatus}
            children={'Редактировать статус'}
          />
          <Button
            className={clases.button}
            onClick={this.showModalColor}
            children={'Редактировать цвет'}
          />
        </section>
        <section className={clases.modalStatus}>
          {this.state.showModalStatus ? (
            <Modal
              data={this.state.dataStatus.statuses}
              close={this.showModalStatus}
              add={this.addStatus}
              delete={this.deleteStatus}
              handlerChange={this.handlerChangeStatus}
              value={this.state.dataStatus.value}
              type="hidden"
            />
          ) : null}
        </section>
        <section className={clases.modalColor}>
          {this.state.showModalColor ? (
            <Modal
              data={this.state.dataColor.colors}
              close={this.showModalColor}
              add={this.addColor}
              delete={this.deleteColor}
              handlerChange={this.handlerChangeColor}
              value={this.state.dataColor.value}
              type="color"
              handlerChangeTitle={this.handlerChangeTitleColor}
              input={this.state.dataColor.input}
            />
          ) : null}
        </section>
      </>
    )
  }
}
export default Table
