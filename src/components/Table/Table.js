import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Row from '../Row/Row'

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
        fullName: 'Имя 1',
        nameProject: 'Проект 1',
        status: 'Статус 1',
        months: {
          Febrary: {
            hours: ['1', '2', '3', '4'],
          },
          Marth: {
            hours: ['5', '6', '7', '8'],
          },
          April: {
            hours: ['9', '10', '11', '12', '13'],
          },
        },
      },
      {
        index: 1,
        fullName: 'Имя 2',
        nameProject: 'Проект 2',
        status: 'Статус 2',
        months: {
          Febrary: {
            hours: ['1', '2', '3', '4'],
          },
          Marth: {
            hours: ['5', '6', '7', '8'],
          },
          April: {
            hours: ['9', '10', '11', '12', '13'],
          },
        },
      },
      {
        index: 2,
        fullName: 'Имя 3',
        nameProject: 'Проект 3',
        status: 'Статус 3',
        months: {
          Febrary: {
            hours: ['1', '2', '3', '4'],
          },
          Marth: {
            hours: ['5', '6', '7', '8'],
          },
          April: {
            hours: ['9', '10', '11', '12', '13'],
          },
        },
      },
    ],
  }

  handlerChangefullName = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].fullName = event.target.value
    this.setState({ dataRowsBody })
	}
	//  вместо fullName - ещё один параметр
  handlerChangeNameProject = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].nameProject = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeStatus = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].status = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsFebraryHours0 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Febrary.hours[0] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsFebraryHours1 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Febrary.hours[1] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsFebraryHours2 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Febrary.hours[2] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsFebraryHours3 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Febrary.hours[3] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsMarthHours0 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Marth.hours[0] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsMarthHours1 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Marth.hours[1] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsMarthHours2 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Marth.hours[2] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsMarthHours3 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.Marth.hours[3] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsAprilHours0 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.April.hours[0] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsAprilHours1 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.April.hours[1] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsAprilHours2 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.April.hours[2] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsAprilHours3 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.April.hours[3] = event.target.value
    this.setState({ dataRowsBody })
	}
	handlerChangeMonthsAprilHours4 = (index, event) => {
    let dataRowsBody = Object.assign(this.state.dataRowsBody)
    dataRowsBody[index].months.April.hours[4] = event.target.value
    this.setState({ dataRowsBody })
	}
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
            handlerChangefullName={this.handlerChangefullName}
						handlerChangeNameProject={this.handlerChangeNameProject}
						handlerChangeStatus={this.handlerChangeStatus}
						handlerChangeMonthsFebraryHours0={this.handlerChangeMonthsFebraryHours0}
						handlerChangeMonthsFebraryHours1={this.handlerChangeMonthsFebraryHours1}
						handlerChangeMonthsFebraryHours2={this.handlerChangeMonthsFebraryHours2}
						handlerChangeMonthsFebraryHours3={this.handlerChangeMonthsFebraryHours3}
						handlerChangeMonthsMarthHours0={this.handlerChangeMonthsMarthHours0}
						handlerChangeMonthsMarthHours1={this.handlerChangeMonthsMarthHours1}
						handlerChangeMonthsMarthHours2={this.handlerChangeMonthsMarthHours2}
						handlerChangeMonthsMarthHours3={this.handlerChangeMonthsMarthHours3}
						handlerChangeMonthsAprilHours0={this.handlerChangeMonthsAprilHours0}
						handlerChangeMonthsAprilHours1={this.handlerChangeMonthsAprilHours1}
						handlerChangeMonthsAprilHours2={this.handlerChangeMonthsAprilHours2}
						handlerChangeMonthsAprilHours3={this.handlerChangeMonthsAprilHours3}
						handlerChangeMonthsAprilHours4={this.handlerChangeMonthsAprilHours4}
          />
          <Row
            dataRowsBody={this.state.dataRowsBody[1]}
						handlerChangefullName={this.handlerChangefullName}
						handlerChangeNameProject={this.handlerChangeNameProject}
						handlerChangeStatus={this.handlerChangeStatus}
						handlerChangeMonthsFebraryHours0={this.handlerChangeMonthsFebraryHours0}
						handlerChangeMonthsFebraryHours1={this.handlerChangeMonthsFebraryHours1}
						handlerChangeMonthsFebraryHours2={this.handlerChangeMonthsFebraryHours2}
						handlerChangeMonthsFebraryHours3={this.handlerChangeMonthsFebraryHours3}
						handlerChangeMonthsMarthHours0={this.handlerChangeMonthsMarthHours0}
						handlerChangeMonthsMarthHours1={this.handlerChangeMonthsMarthHours1}
						handlerChangeMonthsMarthHours2={this.handlerChangeMonthsMarthHours2}
						handlerChangeMonthsMarthHours3={this.handlerChangeMonthsMarthHours3}
						handlerChangeMonthsAprilHours0={this.handlerChangeMonthsAprilHours0}
						handlerChangeMonthsAprilHours1={this.handlerChangeMonthsAprilHours1}
						handlerChangeMonthsAprilHours2={this.handlerChangeMonthsAprilHours2}
						handlerChangeMonthsAprilHours3={this.handlerChangeMonthsAprilHours3}
						handlerChangeMonthsAprilHours4={this.handlerChangeMonthsAprilHours4}
          />
          <Row
            dataRowsBody={this.state.dataRowsBody[2]}
						handlerChangefullName={this.handlerChangefullName}
						handlerChangeNameProject={this.handlerChangeNameProject}
						handlerChangeStatus={this.handlerChangeStatus}
						handlerChangeMonthsFebraryHours0={this.handlerChangeMonthsFebraryHours0}
						handlerChangeMonthsFebraryHours1={this.handlerChangeMonthsFebraryHours1}
						handlerChangeMonthsFebraryHours2={this.handlerChangeMonthsFebraryHours2}
						handlerChangeMonthsFebraryHours3={this.handlerChangeMonthsFebraryHours3}
						handlerChangeMonthsMarthHours0={this.handlerChangeMonthsMarthHours0}
						handlerChangeMonthsMarthHours1={this.handlerChangeMonthsMarthHours1}
						handlerChangeMonthsMarthHours2={this.handlerChangeMonthsMarthHours2}
						handlerChangeMonthsMarthHours3={this.handlerChangeMonthsMarthHours3}
						handlerChangeMonthsAprilHours0={this.handlerChangeMonthsAprilHours0}
						handlerChangeMonthsAprilHours1={this.handlerChangeMonthsAprilHours1}
						handlerChangeMonthsAprilHours2={this.handlerChangeMonthsAprilHours2}
						handlerChangeMonthsAprilHours3={this.handlerChangeMonthsAprilHours3}
						handlerChangeMonthsAprilHours4={this.handlerChangeMonthsAprilHours4}
          />
        </tbody>
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
