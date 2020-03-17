import React from 'react'
import Input from '../Input/Input'
// import SelectStatus from '../SelectStatus/SelectStatus'
import clases from './Row.module.css'

let Row = props => {
  let ChangefullName = event => {
    props.handlerChangefullName(props.dataRowsBody.index, event)
  }
  let ChangeNameProject = event => {
    props.handlerChangeNameProject(props.dataRowsBody.index, event)
  }
  let ChangeMonthsFebraryHours = (id, event) => {
    props.handlerChangeMonthsFebraryHours(
      id,
      event,
      props.dataRowsBody.index
    );
    // ChangeHoursFebrary = (event) => props.ChangeMonthsFebraryHours(props.id, event)
  };
  let ChangeMonthsMarthHours = (id, event) => {
    props.handlerChangeMonthsMarthHours(
      id,
      event,
      props.dataRowsBody.index
    );
  };
  let ChangeMonthsAprilHours = (id, event) => {
    props.handlerChangeMonthsAprilHours(
      id,
      event,
      props.dataRowsBody.index
    );
  };
  return (
    <tr>
      <td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.fullName}
          ChangeName={ChangefullName} />
      </td>
      <td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.nameProject}
          ChangeName={ChangeNameProject} />
      </td>
      <td className={clases.cellhours}>
        <select>
          {props.statuses.map(({text}) => (
            <option key={text}>{text}</option>
          ))}
        </select>
      </td>       
      {/* ------------------------ Цвет фона ---------------- */}

      {/* 
      <td>
        <select>
          {props.colors.map(({color}) => (
            <option>{color}</option>
          ))}
        </select>
      </td> */} 
      {props.dataRowsBody.months.Febrary.hours.map(
        ({ id, number }) => (
          <td className={clases.cellhours} >
            <Input
              key={id}
              ChangeMonthsHours={ChangeMonthsFebraryHours}
              value={number}
              id={id}
            />
          </td>
        )
      )}
      {props.dataRowsBody.months.Marth.hours.map(
        ({ id, number }) => (
          <td className={clases.cellhours}>
            <Input
              key={id}
              ChangeMonthsHours={ChangeMonthsMarthHours}
              value={number}
              id={id}
            />
          </td>
        )
      )}
      {props.dataRowsBody.months.April.hours.map(
        ({ id, number }) => (
          <td className={clases.cellhours}>
            <Input
              key={id}
              ChangeMonthsHours={ChangeMonthsAprilHours}
              value={number}
              id={id}
            />
          </td>
        )
      )}
    </tr>
  )
}
export default Row
