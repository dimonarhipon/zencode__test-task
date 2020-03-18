import React from 'react'
import clases from './Table.module.css'
import Col from '../../Column/Col'
import Row from '../Row/Row'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

class Table extends React.Component {
  now = new Date()
  state = {
    dataRowsHead: {
      name: 'Фамилия Имя',
      project: 'Проект',
      status: 'Статус',
      months: [
        { name: 'Январь',   weeks: [1, 2, 3, 4, 5] },
        { name: 'Февраль',  weeks: [6, 7, 8, 9] },
        { name: 'Март',     weeks: [10, 11, 12, 13],},
        { name: 'Апрель',   weeks: [14, 15, 16, 17, 18],},
        { name: 'Май',      weeks: [19, 20, 21, 22], },
        { name: 'Июнь',     weeks: [23, 24, 25, 26],},
        { name: 'Июль',     weeks: [27, 28, 29, 30, 31],},
        { name: 'Август',   weeks: [32, 33, 34, 35],},
        { name: 'Сентябрь', weeks: [36, 37, 38, 39, 40],},
        { name: 'Октябрь',  weeks: [41, 42, 43, 44],},
        { name: 'Ноябрь',   weeks: [45, 46, 47, 48],},
        { name: 'Декабрь',  weeks: [49, 50, 51, 52, 53],},
      ],
    },
    dataRowsBody: [
      {
        index: 0,
        fullName: "Имя 1",
        nameProject: "Проект 1",
        months: [
          // 0 - январь
          [
            { number: 1, id: 1000, background: "#ffffff", show: false },
            { number: 2, id: 1001, background: "#ffffff", show: false },
            { number: 3, id: 1002, background: "#ffffff", show: false },
            { number: 4, id: 1003, background: "#ffffff", show: false },
            { number: 5, id: 1004, background: "#ffffff", show: false }
          ],
          // 1 - февраль
          [
            { number: 6, id: 1010, background: "#ffffff", show: false },
            { number: 7, id: 1011, background: "#ffffff", show: false },
            { number: 8, id: 1012, background: "#ffffff", show: false },
            { number: 9, id: 1013, background: "#ffffff", show: false }
          ],
          // 2 - март
          [
            { number: 10, id: 1020, background: "#ffffff", show: false },
            { number: 11, id: 1021, background: "#ffffff", show: false },
            { number: 12, id: 1022, background: "#ffffff", show: false },
            { number: 13, id: 1023, background: "#ffffff", show: false }
          ],
          // 3 - апрель
          [
            { number: 14, id: 1030, background: "#ffffff", show: false },
            { number: 15, id: 1031, background: "#ffffff", show: false },
            { number: 16, id: 1032, background: "#ffffff", show: false },
            { number: 17, id: 1033, background: "#ffffff", show: false },
            { number: 18, id: 1034, background: "#ffffff", show: false }
          ],
          // 4 - май
          [
            { number: 19, id: 1040, background: "#ffffff", show: false },
            { number: 20, id: 1041, background: "#ffffff", show: false },
            { number: 21, id: 1042, background: "#ffffff", show: false },
            { number: 22, id: 1043, background: "#ffffff", show: false },
          ],
          // 5 - июнь
          [
            { number: 23, id: 1050, background: "#ffffff", show: false },
            { number: 24, id: 1051, background: "#ffffff", show: false },
            { number: 25, id: 1052, background: "#ffffff", show: false },
            { number: 26, id: 1053, background: "#ffffff", show: false },
          ],
          // 6 - июль
          [
            { number: 27, id: 1060, background: "#ffffff", show: false },
            { number: 28, id: 1061, background: "#ffffff", show: false },
            { number: 29, id: 1062, background: "#ffffff", show: false },
            { number: 30, id: 1063, background: "#ffffff", show: false },
            { number: 31, id: 1064, background: "#ffffff", show: false }
          ],
          // 7 - август
          [
            { number: 32, id: 1070, background: "#ffffff", show: false },
            { number: 33, id: 1071, background: "#ffffff", show: false },
            { number: 34, id: 1072, background: "#ffffff", show: false },
            { number: 35, id: 1073, background: "#ffffff", show: false },
          ],
          // 8 - сентябрь
          [
            { number: 36, id: 1080, background: "#ffffff", show: false },
            { number: 37, id: 1081, background: "#ffffff", show: false },
            { number: 38, id: 1082, background: "#ffffff", show: false },
            { number: 39, id: 1083, background: "#ffffff", show: false },
            { number: 40, id: 1084, background: "#ffffff", show: false }
          ],
          // 9 - октябрь
          [
            { number: 41, id: 1090, background: "#ffffff", show: false },
            { number: 42, id: 1091, background: "#ffffff", show: false },
            { number: 43, id: 1092, background: "#ffffff", show: false },
            { number: 44, id: 1093, background: "#ffffff", show: false },
          ],
          // 10 - ноябрь
          [
            { number: 45, id: 1100, background: "#ffffff", show: false },
            { number: 46, id: 1101, background: "#ffffff", show: false },
            { number: 47, id: 1102, background: "#ffffff", show: false },
            { number: 48, id: 1103, background: "#ffffff", show: false },
          ],
          // 11 - декабрь
          [
            { number: 49, id: 1200, background: "#ffffff", show: false },
            { number: 50, id: 1201, background: "#ffffff", show: false },
            { number: 51, id: 1202, background: "#ffffff", show: false },
            { number: 52, id: 1203, background: "#ffffff", show: false },
            { number: 53, id: 1203, background: "#ffffff", show: false },
          ]
        ]
      },
      {
        index: 1,
        fullName: "Имя 1",
        nameProject: "Проект 1",
        months: [
          // 0 - январь
          [
            { number: 1, id: 1000, background: "#ffffff", show: false },
            { number: 2, id: 1001, background: "#ffffff", show: false },
            { number: 3, id: 1002, background: "#ffffff", show: false },
            { number: 4, id: 1003, background: "#ffffff", show: false },
            { number: 5, id: 1004, background: "#ffffff", show: false }
          ],
          // 1 - февраль
          [
            { number: 6, id: 1010, background: "#ffffff", show: false },
            { number: 7, id: 1011, background: "#ffffff", show: false },
            { number: 8, id: 1012, background: "#ffffff", show: false },
            { number: 9, id: 1013, background: "#ffffff", show: false }
          ],
          // 2 - март
          [
            { number: 10, id: 1020, background: "#ffffff", show: false },
            { number: 11, id: 1021, background: "#ffffff", show: false },
            { number: 12, id: 1022, background: "#ffffff", show: false },
            { number: 13, id: 1023, background: "#ffffff", show: false }
          ],
          // 3 - апрель
          [
            { number: 14, id: 1030, background: "#ffffff", show: false },
            { number: 15, id: 1031, background: "#ffffff", show: false },
            { number: 16, id: 1032, background: "#ffffff", show: false },
            { number: 17, id: 1033, background: "#ffffff", show: false },
            { number: 18, id: 1034, background: "#ffffff", show: false }
          ],
          // 4 - май
          [
            { number: 19, id: 1040, background: "#ffffff", show: false },
            { number: 20, id: 1041, background: "#ffffff", show: false },
            { number: 21, id: 1042, background: "#ffffff", show: false },
            { number: 22, id: 1043, background: "#ffffff", show: false },
          ],
          // 5 - июнь
          [
            { number: 23, id: 1050, background: "#ffffff", show: false },
            { number: 24, id: 1051, background: "#ffffff", show: false },
            { number: 25, id: 1052, background: "#ffffff", show: false },
            { number: 26, id: 1053, background: "#ffffff", show: false },
          ],
          // 6 - июль
          [
            { number: 27, id: 1060, background: "#ffffff", show: false },
            { number: 28, id: 1061, background: "#ffffff", show: false },
            { number: 29, id: 1062, background: "#ffffff", show: false },
            { number: 30, id: 1063, background: "#ffffff", show: false },
            { number: 31, id: 1064, background: "#ffffff", show: false }
          ],
          // 7 - август
          [
            { number: 32, id: 1070, background: "#ffffff", show: false },
            { number: 33, id: 1071, background: "#ffffff", show: false },
            { number: 34, id: 1072, background: "#ffffff", show: false },
            { number: 35, id: 1073, background: "#ffffff", show: false },
          ],
          // 8 - сентябрь
          [
            { number: 36, id: 1080, background: "#ffffff", show: false },
            { number: 37, id: 1081, background: "#ffffff", show: false },
            { number: 38, id: 1082, background: "#ffffff", show: false },
            { number: 39, id: 1083, background: "#ffffff", show: false },
            { number: 40, id: 1084, background: "#ffffff", show: false }
          ],
          // 9 - октябрь
          [
            { number: 41, id: 1090, background: "#ffffff", show: false },
            { number: 42, id: 1091, background: "#ffffff", show: false },
            { number: 43, id: 1092, background: "#ffffff", show: false },
            { number: 44, id: 1093, background: "#ffffff", show: false },
          ],
          // 10 - ноябрь
          [
            { number: 45, id: 1100, background: "#ffffff", show: false },
            { number: 46, id: 1101, background: "#ffffff", show: false },
            { number: 47, id: 1102, background: "#ffffff", show: false },
            { number: 48, id: 1103, background: "#ffffff", show: false },
          ],
          // 11 - декабрь
          [
            { number: 49, id: 1200, background: "#ffffff", show: false },
            { number: 50, id: 1201, background: "#ffffff", show: false },
            { number: 51, id: 1202, background: "#ffffff", show: false },
            { number: 52, id: 1203, background: "#ffffff", show: false },
            { number: 53, id: 1203, background: "#ffffff", show: false },
          ]
        ]
      },
      {
        index: 2,
        fullName: "Имя 1",
        nameProject: "Проект 1",
        months: [
          // 0 - январь
          [
            { number: 1, id: 1000, background: "#ffffff", show: false },
            { number: 2, id: 1001, background: "#ffffff", show: false },
            { number: 3, id: 1002, background: "#ffffff", show: false },
            { number: 4, id: 1003, background: "#ffffff", show: false },
            { number: 5, id: 1004, background: "#ffffff", show: false }
          ],
          // 1 - февраль
          [
            { number: 6, id: 1010, background: "#ffffff", show: false },
            { number: 7, id: 1011, background: "#ffffff", show: false },
            { number: 8, id: 1012, background: "#ffffff", show: false },
            { number: 9, id: 1013, background: "#ffffff", show: false }
          ],
          // 2 - март
          [
            { number: 10, id: 1020, background: "#ffffff", show: false },
            { number: 11, id: 1021, background: "#ffffff", show: false },
            { number: 12, id: 1022, background: "#ffffff", show: false },
            { number: 13, id: 1023, background: "#ffffff", show: false }
          ],
          // 3 - апрель
          [
            { number: 14, id: 1030, background: "#ffffff", show: false },
            { number: 15, id: 1031, background: "#ffffff", show: false },
            { number: 16, id: 1032, background: "#ffffff", show: false },
            { number: 17, id: 1033, background: "#ffffff", show: false },
            { number: 18, id: 1034, background: "#ffffff", show: false }
          ],
          // 4 - май
          [
            { number: 19, id: 1040, background: "#ffffff", show: false },
            { number: 20, id: 1041, background: "#ffffff", show: false },
            { number: 21, id: 1042, background: "#ffffff", show: false },
            { number: 22, id: 1043, background: "#ffffff", show: false },
          ],
          // 5 - июнь
          [
            { number: 23, id: 1050, background: "#ffffff", show: false },
            { number: 24, id: 1051, background: "#ffffff", show: false },
            { number: 25, id: 1052, background: "#ffffff", show: false },
            { number: 26, id: 1053, background: "#ffffff", show: false },
          ],
          // 6 - июль
          [
            { number: 27, id: 1060, background: "#ffffff", show: false },
            { number: 28, id: 1061, background: "#ffffff", show: false },
            { number: 29, id: 1062, background: "#ffffff", show: false },
            { number: 30, id: 1063, background: "#ffffff", show: false },
            { number: 31, id: 1064, background: "#ffffff", show: false }
          ],
          // 7 - август
          [
            { number: 32, id: 1070, background: "#ffffff", show: false },
            { number: 33, id: 1071, background: "#ffffff", show: false },
            { number: 34, id: 1072, background: "#ffffff", show: false },
            { number: 35, id: 1073, background: "#ffffff", show: false },
          ],
          // 8 - сентябрь
          [
            { number: 36, id: 1080, background: "#ffffff", show: false },
            { number: 37, id: 1081, background: "#ffffff", show: false },
            { number: 38, id: 1082, background: "#ffffff", show: false },
            { number: 39, id: 1083, background: "#ffffff", show: false },
            { number: 40, id: 1084, background: "#ffffff", show: false }
          ],
          // 9 - октябрь
          [
            { number: 41, id: 1090, background: "#ffffff", show: false },
            { number: 42, id: 1091, background: "#ffffff", show: false },
            { number: 43, id: 1092, background: "#ffffff", show: false },
            { number: 44, id: 1093, background: "#ffffff", show: false },
          ],
          // 10 - ноябрь
          [
            { number: 45, id: 1100, background: "#ffffff", show: false },
            { number: 46, id: 1101, background: "#ffffff", show: false },
            { number: 47, id: 1102, background: "#ffffff", show: false },
            { number: 48, id: 1103, background: "#ffffff", show: false },
          ],
          // 11 - декабрь
          [
            { number: 49, id: 1200, background: "#ffffff", show: false },
            { number: 50, id: 1201, background: "#ffffff", show: false },
            { number: 51, id: 1202, background: "#ffffff", show: false },
            { number: 52, id: 1203, background: "#ffffff", show: false },
            { number: 53, id: 1203, background: "#ffffff", show: false },
          ]
        ]
      },
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
      months: [
        // 0 - январь
        [
          { number: 1, id: 1000, background: "#ffffff", show: false },
          { number: 2, id: 1001, background: "#ffffff", show: false },
          { number: 3, id: 1002, background: "#ffffff", show: false },
          { number: 4, id: 1003, background: "#ffffff", show: false },
          { number: 5, id: 1004, background: "#ffffff", show: false }
        ],
        // 1 - февраль
        [
          { number: 6, id: 1010, background: "#ffffff", show: false },
          { number: 7, id: 1011, background: "#ffffff", show: false },
          { number: 8, id: 1012, background: "#ffffff", show: false },
          { number: 9, id: 1013, background: "#ffffff", show: false }
        ],
        // 2 - март
        [
          { number: 10, id: 1020, background: "#ffffff", show: false },
          { number: 11, id: 1021, background: "#ffffff", show: false },
          { number: 12, id: 1022, background: "#ffffff", show: false },
          { number: 13, id: 1023, background: "#ffffff", show: false }
        ],
        // 3 - апрель
        [
          { number: 14, id: 1030, background: "#ffffff", show: false },
          { number: 15, id: 1031, background: "#ffffff", show: false },
          { number: 16, id: 1032, background: "#ffffff", show: false },
          { number: 17, id: 1033, background: "#ffffff", show: false },
          { number: 18, id: 1034, background: "#ffffff", show: false }
        ],
        // 4 - май
        [
          { number: 19, id: 1040, background: "#ffffff", show: false },
          { number: 20, id: 1041, background: "#ffffff", show: false },
          { number: 21, id: 1042, background: "#ffffff", show: false },
          { number: 22, id: 1043, background: "#ffffff", show: false },
        ],
        // 5 - июнь
        [
          { number: 23, id: 1050, background: "#ffffff", show: false },
          { number: 24, id: 1051, background: "#ffffff", show: false },
          { number: 25, id: 1052, background: "#ffffff", show: false },
          { number: 26, id: 1053, background: "#ffffff", show: false },
        ],
        // 6 - июль
        [
          { number: 27, id: 1060, background: "#ffffff", show: false },
          { number: 28, id: 1061, background: "#ffffff", show: false },
          { number: 29, id: 1062, background: "#ffffff", show: false },
          { number: 30, id: 1063, background: "#ffffff", show: false },
          { number: 31, id: 1064, background: "#ffffff", show: false }
        ],
        // 7 - август
        [
          { number: 32, id: 1070, background: "#ffffff", show: false },
          { number: 33, id: 1071, background: "#ffffff", show: false },
          { number: 34, id: 1072, background: "#ffffff", show: false },
          { number: 35, id: 1073, background: "#ffffff", show: false },
        ],
        // 8 - сентябрь
        [
          { number: 36, id: 1080, background: "#ffffff", show: false },
          { number: 37, id: 1081, background: "#ffffff", show: false },
          { number: 38, id: 1082, background: "#ffffff", show: false },
          { number: 39, id: 1083, background: "#ffffff", show: false },
          { number: 40, id: 1084, background: "#ffffff", show: false }
        ],
        // 9 - октябрь
        [
          { number: 41, id: 1090, background: "#ffffff", show: false },
          { number: 42, id: 1091, background: "#ffffff", show: false },
          { number: 43, id: 1092, background: "#ffffff", show: false },
          { number: 44, id: 1093, background: "#ffffff", show: false },
        ],
        // 10 - ноябрь
        [
          { number: 45, id: 1100, background: "#ffffff", show: false },
          { number: 46, id: 1101, background: "#ffffff", show: false },
          { number: 47, id: 1102, background: "#ffffff", show: false },
          { number: 48, id: 1103, background: "#ffffff", show: false },
        ],
        // 11 - декабрь
        [
          { number: 49, id: 1200, background: "#ffffff", show: false },
          { number: 50, id: 1201, background: "#ffffff", show: false },
          { number: 51, id: 1202, background: "#ffffff", show: false },
          { number: 52, id: 1203, background: "#ffffff", show: false },
          { number: 53, id: 1203, background: "#ffffff", show: false },
        ]
      ]
    }
    this.state.dataRowsBody.push(dataRowsBody);
    this.setState(dataRowsBody);
  }
  addProject = () => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody = {
      index: dataRowsBody.length,
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

    // this.state.dataRowsBody.sort(function (a, b) {
    //   if (a.index > b.index) {
    //     return 1;
    //   }
    //   if (a.index < b.index) {
    //     return -1;
    //   }
    //   return 0;
    // });
    // console.log(this.state.dataRowsBody);
    this.setState(dataRowsBody);
  }
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

  // -----------------------  Обработчик редактирования часов в любом месяце
  handlerChangeMonths = (id, event, month, index) => {
    let item = this.state.dataRowsBody[index].months[month].findIndex(
      number => number.id === id
    );
    let hours = Object.assign(
      this.state.dataRowsBody[index].months[month]
    );
    hours[item].number = event.target.value;
    this.setState({ hours });
  };
  handleChangeComplete = (color, id, month, index) => {
    let item = this.state.dataRowsBody[index].months[month].findIndex(
      number => number.id === id
    );
    let hours = Object.assign(
      this.state.dataRowsBody[index].months[month]
    );
    hours[item].background = color.hex;
    this.setState({ hours });
  }
  onShow = (id, month, index) => { 
    let item = this.state.dataRowsBody[index].months[month].findIndex(
      number => number.id === id
    );
    let hours = Object.assign(
      this.state.dataRowsBody[index].months[month]
    );
    let show = hours[item].show
    hours[item].show = !show 
    this.setState({ hours });
  };
  render() {
    
    // let now = new Date()
    let month_1 = this.now.getMonth()
    let month_2 = this.now.getMonth() + 1
    let month_3 = this.now.getMonth() + 2
    let month_4 = this.now.getMonth() + 3
    let weeks_1 = this.state.dataRowsHead.months[month_1].weeks
    let weeks_2 = this.state.dataRowsHead.months[month_2].weeks
    let weeks_3 = this.state.dataRowsHead.months[month_3].weeks
    let weeks_4 = this.state.dataRowsHead.months[month_4].weeks
    // я получаю число 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11
    return (
      <table className={clases.table}>
        <thead className={clases.columnsGroup}>
          <tr>
            <Col row={2} value={this.state.dataRowsHead.name} />
            <Col row={2} value={this.state.dataRowsHead.project} />
            <Col row={2} value={this.state.dataRowsHead.status} />
            <Col col={weeks_1.length} value={this.state.dataRowsHead.months[month_1].name} />
            <Col col={weeks_2.length} value={this.state.dataRowsHead.months[month_2].name} />
            <Col col={weeks_3.length} value={this.state.dataRowsHead.months[month_3].name} />
            <Col col={weeks_4.length} value={this.state.dataRowsHead.months[month_4].name} />
          </tr>
          <tr>
            {weeks_1.map((item) => (
              <td className={clases.week}>
                {item}
              </td>
            ))}
            {weeks_2.map((item) => (
              <td className={clases.week}>
                {item}
              </td>
            ))}
            {weeks_3.map((item) => (
              <td className={clases.week}>
                {item}
              </td>
            ))}
            {weeks_4.map((item) => (
              <td className={clases.week}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className={clases.workingHours}>
          {this.state.dataRowsBody.map(({index}) => (
            <Row
              month_1={month_1}
              month_2={month_2}
              month_3={month_3}
              month_4={month_4}

              dataRowsBody={this.state.dataRowsBody[index]}
              statuses={this.state.dataStatus.statuses}
              colors={this.state.dataColor.colors}
              handlerChangefullName={this.handlerChangefullName}
              handlerChangeNameProject={this.handlerChangeNameProject}
              addProject={this.addProject}

              handlerChangeMonths={this.handlerChangeMonths}
              handleChangeComplete={this.handleChangeComplete}
              onShow={this.onShow}
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

