import React from 'react'
import clases from './Table.module.css'
import Col from '../../Column/Col'
import Row from '../Row/Row'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

class Table extends React.Component {
  state = {
    dataRowsHead: {
      name: 'Фамилия Имя',
      project: 'Проект',
      status: 'Статус',
      months: [
        {
          name: 'Март',
          weeks: [10, 11, 12, 13],
        },
        {
          name: 'Апрель',
          weeks: [14, 15, 16, 17, 18],
        },
        {
          name: 'Май',
          weeks: [19, 20, 21, 22],
        },
        {
          name: 'Июнь',
          weeks: [23, 24, 25, 26],
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
      input: '0', 
      value: "Пример"
    },
    dataColor: {
      colors: [
        { id: 100, color: "#388E3C", title: "Загрузка подтверждена"},
        { id: 101, color: "#303F9F", title: "Загрузка запланирована"},
        { id: 102, color: "#e53935", title: "Простой"},
      ],
      counter: 103,
      value: "Пример",
      title: "1",
      input: "#FFEA00",
    },
    showModalStatus: false,
    showModalColor: false
  }
  
  addDeveloper = () => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody = {
      index: dataRowsBody.length,
      fullName: "Имя",
      nameProject: "Проект",
      months: {
        Febrary: {
          hours: [
            { number: 1, id: 4000 },
            { number: 2, id: 4001 },
            { number: 3, id: 4002 },
            { number: 4, id: 4003 }
          ]
        },
        Marth: {
          hours: [
            { number: 5, id: 4100 },
            { number: 6, id: 4101 },
            { number: 7, id: 4102 },
            { number: 8, id: 4103 }
          ]
        },
        April: {
          hours: [
            { number: 9, id: 4200 },
            { number: 10, id: 4201 },
            { number: 11, id: 4202 },
            { number: 12, id: 4203 },
            { number: 13, id: 4204 }
          ]
        }
      }
    }
    this.state.dataRowsBody.push(dataRowsBody);
    this.setState(dataRowsBody);
  }

  // addStatus = () => {
  //   let statuses = Object.assign(this.state.dataStatus.statuses)
  //   let counter = this.state.dataStatus.counter + this.state.dataStatus.statuses.length;
  //   let value = this.state.dataStatus.value;
  //   statuses = { id: ++counter, text: value };
  //   this.state.dataStatus.statuses.push(statuses);
  //   // Не срабатывает присваивание пустому значению, не знаю почему
  //   value = ' ';
  //   this.setState(statuses);
  // }




  // componentDidMount() {
    //   let state = this.state;
    //   localStorage.setItem('state', JSON.stringify(state));
    //   this.setState(state);
    // state = JSON.parse(localStorage.getItem('state'));

    // localStorage.setItem('RowsHead', JSON.stringify(dataRowsHead));
    // localStorage.setItem('RowsBody', JSON.stringify(dataRowsBody));
    // localStorage.setItem('Status', JSON.stringify(dataStatus));
    // localStorage.setItem('Color', JSON.stringify(dataColor));
    // localStorage.setItem('showModalStatus', JSON.stringify(showModalStatus));
    // localStorage.setItem('showModalColor', JSON.stringify(showModalColor));


    
    // let dataRowsHead = JSON.parse(localStorage.getItem("RowsHead"));
    // let dataRowsBody = JSON.parse(localStorage.getItem("RowsBody"));
    // let dataStatus = JSON.parse(localStorage.getItem("Status"));
    // let dataColor = JSON.parse(localStorage.getItem('Color'));
    // let showModalStatus = JSON.parse(localStorage.getItem('showModalStatus'));
    // let showModalColor = JSON.parse(localStorage.getItem('showModalColor'));
    
    // this.setState(state);
  // };
  
  // componentDidUpdate() {
  //   let state = JSON.parse(localStorage.getItem("state"));
  //   this.setState(state);
  // }


  // --------------------------- Обработчики редактирования Статуса 
  addStatus = () => {
    let statuses = Object.assign(this.state.dataStatus.statuses)
    let counter = this.state.dataStatus.counter + this.state.dataStatus.statuses.length;
    let value = this.state.dataStatus.value;
    statuses = { id: ++counter, text: value };
    this.state.dataStatus.statuses.push(statuses);
    // Не срабатывает присваивание пустому значению, не знаю почему
    value = ' ';
    this.setState(statuses);
  }
  deleteStatus = id => {
    let statuses = this.state.dataStatus.statuses.filter(item => item.id !== id)
    this.state.dataStatus.statuses.pop(statuses)
    this.setState({ statuses })
  }
  handlerChangeStatus = event => {
    let dataStatus = Object.assign(this.state.dataStatus)
    dataStatus.value = event.target.value
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
    let value = this.state.dataColor.value;
    colors = { id: ++counter, color: input, value: value };
    this.state.dataColor.colors.push(colors);
    value = ""
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
    dataColor.value = event.target.value
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
            <Col row={2} value={this.state.dataRowsHead.name} />
            <Col row={2} value={this.state.dataRowsHead.project} />
            <Col row={2} value={this.state.dataRowsHead.status} />
            <Col col={4} value={this.state.dataRowsHead.months[0].name} />
            <Col col={5} value={this.state.dataRowsHead.months[1].name} />
            <Col col={4} value={this.state.dataRowsHead.months[2].name} />
            <Col col={4} value={this.state.dataRowsHead.months[3].name} />
          </tr>
          <tr>
            <td className={clases.week}>10</td>
            <td className={clases.week}>11</td>
            <td className={clases.week}>12</td>
            <td className={clases.week}>13</td>

            <td className={clases.week}>14</td>
            <td className={clases.week}>15</td>
            <td className={clases.week}>16</td>
            <td className={clases.week}>17</td>
            <td className={clases.week}>18</td>

            <td className={clases.week}>19</td>
            <td className={clases.week}>20</td>
            <td className={clases.week}>21</td>
            <td className={clases.week}>22</td>

            <td className={clases.week}>23</td>
            <td className={clases.week}>24</td>
            <td className={clases.week}>25</td>
            <td className={clases.week}>26</td>
          </tr>
        </thead>
        <tbody className={clases.workingHours}>
          {this.state.dataRowsBody.map(({index}) => (
            <Row
              dataRowsBody={this.state.dataRowsBody[index]}
              statuses={this.state.dataStatus.statuses}
              colors={this.state.dataColor.colors}
              handlerChangefullName={this.handlerChangefullName}
              handlerChangeNameProject={this.handlerChangeNameProject}
              
              handlerChangeMonthsFebraryHours={this.handlerChangeMonthsFebraryHours}
              handlerChangeMonthsMarthHours={this.handlerChangeMonthsMarthHours}
              handlerChangeMonthsAprilHours={this.handlerChangeMonthsAprilHours}
            />
          ))}
          
          <Button onClick={this.addDeveloper} value={"Добавить"} />
        </tbody>
        <div className={clases.modalStatus}>
          {this.state.showModalStatus ? 
            <Modal
              data={this.state.dataStatus.statuses}
              closeModal={this.closeModalStatus} 
              add={this.addStatus}
              delete={this.deleteStatus}
              handlerChange={this.handlerChangeStatus}
              value={this.state.dataStatus.value}
              type="hidden"
              /> : null}
        </div>
        <div className={clases.modalColor}>    
          {this.state.showModalColor ? 
            <Modal
              data={this.state.dataColor.colors}
              closeModal={this.closeModalColor}
              add={this.addColor} 
              delete={this.deleteColor}
              handlerChange={this.handlerChangeColor}
              value={this.state.dataColor.value}
              type="color"
              handlerChangeTitle={this.handlerChangeTitleColor}
              input={this.state.dataColor.input}
              /> : null}
        </div>
        <Button onClick={this.showModalStatus} value={"Редактировать статус"}/>
        <Button onClick={this.showModalColor} value={"Редактировать цвет"}/> 
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

