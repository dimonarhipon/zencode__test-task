import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Row from '../Row/Row'
import SelectStatus from '../SelectStatus/SelectStatus'
import SelectColor from '../SelectColor/SelectColor'

class Table extends React.Component {
  state = {
    dataRowsHead: {
      name: 'Фамилия Имя',
      project: 'Проект',
      status: 'Статус',
      months: [
        {
          name: 'Февраль',
          weeks: [6, 7, 8, 9],
        },
        {
          name: 'Март',
          weeks: [10, 11, 12, 13],
        },
        {
          name: 'Апрель',
          weeks: [14, 15, 16, 17, 18],
        },
      ],
    },
    dataRowsBody: [
      {
        index: 0,
        fullName: "Имя 1",
        nameProject: "Проект 1",
        months: {
          Febrary: {
            hours: [
              { number: 1, id: 1100 },
              { number: 2, id: 1101 },
              { number: 3, id: 1102 },
              { number: 4, id: 1103 }
            ]
          },
          Marth: {
            hours: [
              { number: 5, id: 1200 },
              { number: 6, id: 1201 },
              { number: 7, id: 1202 },
              { number: 8, id: 1203 }
            ]
          },
          April: {
            hours: [
              { number: 9, id: 1300 },
              { number: 10, id: 1301 },
              { number: 11, id: 1302 },
              { number: 12, id: 1303 },
              { number: 13, id: 1304 }
            ]
          }
        }
      },
      {
        index: 1,
        fullName: "Имя 2",
        nameProject: "Проект 2",
        months: {
          Febrary: {
            hours: [
              { number: 1, id: 2000 },
              { number: 2, id: 2001 },
              { number: 3, id: 2002 },
              { number: 4, id: 2003 }
            ]
          },
          Marth: {
            hours: [
              { number: 5, id: 2100 },
              { number: 6, id: 2101 },
              { number: 7, id: 2102 },
              { number: 8, id: 2103 }
            ]
          },
          April: {
            hours: [
              { number: 9, id: 2200 },
              { number: 10, id: 2201 },
              { number: 11, id: 2202 },
              { number: 12, id: 2203 },
              { number: 13, id: 2204 }
            ]
          }
        }
      },
      {
        index: 2,
        fullName: "Имя 3",
        nameProject: "Проект 3",
        months: {
          Febrary: {
            hours: [
              { number: 1, id: 3000 },
              { number: 2, id: 3001 },
              { number: 3, id: 3002 },
              { number: 4, id: 3003 }
            ]
          },
          Marth: {
            hours: [
              { number: 5, id: 3100 },
              { number: 6, id: 3101 },
              { number: 7, id: 3102 },
              { number: 8, id: 3103 }
            ]
          },
          April: {
            hours: [
              { number: 9, id: 3200 },
              { number: 10, id: 3201 },
              { number: 11, id: 3202 },
              { number: 12, id: 3203 },
              { number: 13, id: 3204 }
            ]
          }
        }
      }
    ],
    dataStatus: {
      statuses: [
        { id: 0, text: 'Идёт' },
        { id: 1, text: 'Согласован старт' },
        { id: 2, text: 'Завершается' },
      ],
      counter: 3,
      input: '', 
    },
    dataColor: {
      colors: [
        { id: 100, color: "#388E3C", title: "Загрузка подтверждена"},
        { id: 101, color: "#303F9F", title: "Загрузка запланирована"},
        { id: 102, color: "#e53935", title: "Простой"},
      ],
      counter: 103,
      title: "",
      input: "#FFEA00",
    },
    showModalStatus: true,
    showModalColor: true
  }
  // --------------------------- Обработчики редактирования Статуса 
  addStatus = () => {
    let statuses = Object.assign(this.state.dataStatus.statuses)
    let counter = this.state.dataStatus.counter + this.state.dataStatus.statuses.length;
    let input = this.state.dataStatus.input;
    statuses = { id: ++counter, text: input };
    this.state.dataStatus.statuses.push(statuses);
    // Не срабатывает присваивание пустому значению, не знаю почему
    input = ' ';
    this.setState(statuses);
  }
  deleteStatus = id => {
    let statuses = this.state.dataStatus.statuses.filter(item => item.id !== id)
    this.state.dataStatus.statuses.pop(statuses)
    this.setState({ statuses })
  }
  handlerChangeStatus = event => {
    let dataStatus = Object.assign(this.state.dataStatus)
    dataStatus.input = event.target.value
    this.setState({ dataStatus })
  }
  showModalStatus = () => {
    this.setState({showModalStatus: true})
  }
  closeModalStatus = () => {
    this.setState({showModalStatus: false})
  }
  //  ----------------------  Обработчики редактирования Цвета
  addColor = () => {
    let colors = Object.assign(this.state.dataColor.colors)
    let counter = this.state.dataColor.counter + this.state.dataColor.colors.length;
    let input = this.state.dataColor.input;
    let title = this.state.dataColor.title;
    colors = { id: ++counter, color: input, title: title };
    this.state.dataColor.colors.push(colors);
    title = ""
    input = "";
    this.setState(colors);
  }
  deleteColor = id => {
    let colors = this.state.dataColor.colors.filter(item => item.id !== id)
    this.state.dataColor.colors.pop(colors)
    this.setState({ colors })
  }
  handlerChangeColor = (event) => {
    let dataColor = Object.assign(this.state.dataColor)
    dataColor.input = event.target.value
    this.setState({dataColor})
  }
  handlerChangeTitleColor = (event) => {
    let dataColor = Object.assign(this.state.dataColor)
    dataColor.title = event.target.value
    this.setState({dataColor})
  }
  showModalColor = () => {
    this.setState({showModalColor: true})
  }
  closeModalColor = () => {
    this.setState({showModalColor: false})
  }
  // -----------------------  Обработчик редактирования имени
  handlerChangefullName = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].fullName = event.target.value
    this.setState({ dataRowsBody })
	}
  //  вместо fullName - ещё один параметр
  
  // -----------------------  Обработчик редактирования названия проекта
  handlerChangeNameProject = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].nameProject = event.target.value
    this.setState({ dataRowsBody })
  }

  // -----------------------  Обработчик редактирования часов в Феврале
  handlerChangeMonthsFebraryHours = (id, event, index) => {
    let item = this.state.dataRowsBody[index].months.Febrary.hours.findIndex(
      number => number.id === id
    );
    let hours = Object.assign(
      this.state.dataRowsBody[index].months.Febrary.hours
    );
    hours[item].number = event.target.value;
    this.setState({ hours });
  };

  // -----------------------  Обработчик редактирования часов в Марте
  handlerChangeMonthsMarthHours = (id, event, index) => {
    let item = this.state.dataRowsBody[index].months.Marth.hours.findIndex(
      number => number.id === id
    );
    let hours = Object.assign(
      this.state.dataRowsBody[index].months.Marth.hours
    );
    hours[item].number = event.target.value;
    this.setState({ hours });
  };
  
    // -----------------------  Обработчик редактирования часов в Апреле
  handlerChangeMonthsAprilHours = (id, event, index) => {
    let item = this.state.dataRowsBody[index].months.April.hours.findIndex(
      number => number.id === id
    );
    let hours = Object.assign(
      this.state.dataRowsBody[index].months.April.hours
    );
    hours[item].number = event.target.value;
    this.setState({ hours });
  };
  
  render() {
    return (
      <table className={clases.table}>
        <thead className={clases.columnsGroup}>
          <tr>
            <Col row={2} name={this.state.dataRowsHead.name} />
            <Col row={2} project={this.state.dataRowsHead.project} />
            <Col row={2} status={this.state.dataRowsHead.status} />
            <Col col={4} name={this.state.dataRowsHead.months[0].name} />
            <Col col={4} name={this.state.dataRowsHead.months[1].name} />
            <Col col={5} name={this.state.dataRowsHead.months[2].name} />
            
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
          <Row
            dataRowsBody={this.state.dataRowsBody[0]}
            statuses={this.state.dataStatus.statuses}
            colors={this.state.dataColor.colors}
            handlerChangefullName={this.handlerChangefullName}
						handlerChangeNameProject={this.handlerChangeNameProject}
						
            handlerChangeMonthsFebraryHours={this.handlerChangeMonthsFebraryHours}
            handlerChangeMonthsMarthHours={this.handlerChangeMonthsMarthHours}
            handlerChangeMonthsAprilHours={this.handlerChangeMonthsAprilHours}
          />
          <Row
            dataRowsBody={this.state.dataRowsBody[1]}
            statuses={this.state.dataStatus.statuses}
            colors={this.state.dataColor.colors}
						handlerChangefullName={this.handlerChangefullName}
						handlerChangeNameProject={this.handlerChangeNameProject}

            handlerChangeMonthsFebraryHours={this.handlerChangeMonthsFebraryHours}
            handlerChangeMonthsMarthHours={this.handlerChangeMonthsMarthHours}
            handlerChangeMonthsAprilHours={this.handlerChangeMonthsAprilHours}
          />
          <Row
            dataRowsBody={this.state.dataRowsBody[2]}
            statuses={this.state.dataStatus.statuses}
            colors={this.state.dataColor.colors}
						handlerChangefullName={this.handlerChangefullName}
						handlerChangeNameProject={this.handlerChangeNameProject}
            
            handlerChangeMonthsFebraryHours={this.handlerChangeMonthsFebraryHours}
            handlerChangeMonthsMarthHours={this.handlerChangeMonthsMarthHours}
            handlerChangeMonthsAprilHours={this.handlerChangeMonthsAprilHours}
          />
        </tbody>
        <div className={clases.modalStatus}>
          {this.state.showModalStatus ? 
            <SelectStatus 
              dataStatus={this.state.dataStatus}
              closeModalStatus={this.closeModalStatus} 
              addStatus={this.addStatus}
              deleteStatus={this.deleteStatus}
              handlerChangeStatus={this.handlerChangeStatus}
              /> : null}
        </div>
        <div className={clases.modalColor}>    
          {this.state.showModalColor ? 
            <SelectColor 
              dataColor={this.state.dataColor}
              closeModalColor={this.closeModalColor}
              addColor={this.addColor} 
              deleteColor={this.deleteColor}
              handlerChangeColor={this.handlerChangeColor}
              handlerChangeTitleColor={this.handlerChangeTitleColor}
              /> : null}
        </div>
        <button onClick={this.showModalStatus}>Редактировать Статус</button>
        <button onClick={this.showModalColor}>Редактировать цвет</button>
      </table>
    )
  }
}
export default Table




// handlerChangefullName = (event) => {
  //   this.setState(state => {
  //     let dataRowsBody = [...state.dataRowsBody];
  //     dataRowsBody = {fullName: event.target.value, ...dataRowsBody}
  //     return
  //   })
  // }
  // this.setState(prevState => ({
  //   dataRowsBody: {
  //       ...prevState.dataRowsBody,
  //       [prevState.dataRowsBody[1].fullName]: event.target.value,
  //     },
  // }));
  // this.setState(prevState => {
  //   const newDataRowsBody = [...prevState.state.dataRowsBody];
  //   newDataRowsBody[0].fullName = event.target.value;
  //   return {items: newDataRowsBody};
  // })

