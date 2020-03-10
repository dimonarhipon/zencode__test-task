import React from 'react'
import clases from './Table.module.css'
import Col from '../Column/Col'
// import Input from '../Input/Input'
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
	        weeks: [6, 7, 8, 9]
	  		},
	  		{
	  			name: 'Март',
	        weeks: [10, 11, 12, 13]
	  		},
	  		{
	  			name: 'Апрель',
	        weeks: [14, 15, 16, 17, 18]
	  		},
  		]      
    },
    dataRowsBody: [
	    {
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
	        }
	      }
	    },
	    {
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
	        }
	      }
	    },
	    {
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
	        }
	      }
	    },
    ]
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
          <Row dataRowsBody={this.state.dataRowsBody[0]} />
          <Row dataRowsBody={this.state.dataRowsBody[1]} />
          <Row dataRowsBody={this.state.dataRowsBody[2]} />
        </tbody>
      </table>
    )
  }
}
export default Table
