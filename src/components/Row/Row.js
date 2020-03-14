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
          fullName={props.dataRowsBody.fullName}
          ChangefullName={ChangefullName} />
      </td>
      <td className={clases.cellhours}>
        <Input
          nameProject={props.dataRowsBody.nameProject}
          ChangeNameProject={ChangeNameProject} />
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
          <td className={clases.cellhours}>
            <Input
              key={id}
              ChangeMonthsHours={ChangeMonthsFebraryHours}
              number={number}
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
              number={number}
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
              number={number}
              id={id}
            />
          </td>
        )
      )}
    </tr>
  )
}
export default Row
