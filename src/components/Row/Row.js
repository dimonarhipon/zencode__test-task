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
  let ChangeMonthsFebraryHours0 = event => {
    props.handlerChangeMonthsFebraryHours0(props.dataRowsBody.index, event)
  }
  let ChangeMonthsFebraryHours1 = event => {
    props.handlerChangeMonthsFebraryHours1(props.dataRowsBody.index, event)
  }
  let ChangeMonthsFebraryHours2 = event => {
    props.handlerChangeMonthsFebraryHours2(props.dataRowsBody.index, event)
  }
  let ChangeMonthsFebraryHours3 = event => {
    props.handlerChangeMonthsFebraryHours3(props.dataRowsBody.index, event)
  }
  let ChangeMonthsMarthHours0 = event => {
    props.handlerChangeMonthsMarthHours0(props.dataRowsBody.index, event)
  }
  let ChangeMonthsMarthHours1 = event => {
    props.handlerChangeMonthsMarthHours1(props.dataRowsBody.index, event)
  }
  let ChangeMonthsMarthHours2 = event => {
    props.handlerChangeMonthsMarthHours2(props.dataRowsBody.index, event)
  }
  let ChangeMonthsMarthHours3 = event => {
    props.handlerChangeMonthsMarthHours3(props.dataRowsBody.index, event)
  }
  let ChangeMonthsAprilHours0 = event => {
    props.handlerChangeMonthsAprilHours0(props.dataRowsBody.index, event)
  }
  let ChangeMonthsAprilHours1 = event => {
    props.handlerChangeMonthsAprilHours1(props.dataRowsBody.index, event)
  }
  let ChangeMonthsAprilHours2 = event => {
    props.handlerChangeMonthsAprilHours2(props.dataRowsBody.index, event)
  }
  let ChangeMonthsAprilHours3 = event => {
    props.handlerChangeMonthsAprilHours3(props.dataRowsBody.index, event)
  }
  let ChangeMonthsAprilHours4 = event => {
    props.handlerChangeMonthsAprilHours4(props.dataRowsBody.index, event)
  }
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
            <option>{text}</option>
          ))}
        </select>
      </td>
      {/* {props.dataRowsBody.months.Febrary.hours.map(hours => (
        <td className={clases.cellhours}>
          <Input
            hours={hours}
            ChangeMonthsFebraryHours0={ChangeMonthsFebraryHours0}
            ChangeMonthsFebraryHours1={ChangeMonthsFebraryHours1}
          />
        </td>
      ))} */}
      <td className={clases.cellhours}>
        <Input
          hours={props.dataRowsBody.months.Febrary.hours[0]}
          ChangeMonthsFebraryHours0={ChangeMonthsFebraryHours0} />

          
          {/* ------------------------ Цвет фона ---------------- */}

        <select>
          {props.colors.map(({color}) => (
            <option>{color}</option>
          ))}
        </select>
      </td>
      <td className={clases.cellhours}>
        <Input
          hours={props.dataRowsBody.months.Febrary.hours[1]}
          ChangeMonthsFebraryHours1={ChangeMonthsFebraryHours1} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.Febrary.hours[2]}
          ChangeMonthsFebraryHours2={ChangeMonthsFebraryHours2} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.Febrary.hours[3]}
          ChangeMonthsFebraryHours3={ChangeMonthsFebraryHours3} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.Marth.hours[0]}
          ChangeMonthsMarthHours0={ChangeMonthsMarthHours0} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.Marth.hours[1]}
          ChangeMonthsMarthHours1={ChangeMonthsMarthHours1} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.Marth.hours[2]}
          ChangeMonthsMarthHours2={ChangeMonthsMarthHours2} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.Marth.hours[3]}
          ChangeMonthsMarthHours3={ChangeMonthsMarthHours3} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.April.hours[0]}
          ChangeMonthsAprilHours0={ChangeMonthsAprilHours0} />
      </td>
      <td className={clases.cellhours}>
        <Input 
          hours={props.dataRowsBody.months.April.hours[1]}
          ChangeMonthsAprilHours1={ChangeMonthsAprilHours1} />
      </td>
      <td className={clases.cellhours}>
        <Input hours={props.dataRowsBody.months.April.hours[2]}
        ChangeMonthsAprilHours2={ChangeMonthsAprilHours2} />
      </td>
      <td className={clases.cellhours}>
        <Input hours={props.dataRowsBody.months.April.hours[3]}
        ChangeMonthsAprilHours3={ChangeMonthsAprilHours3} />
      </td>
      <td className={clases.cellhours}>
        <Input hours={props.dataRowsBody.months.April.hours[4]}
        ChangeMonthsAprilHours4={ChangeMonthsAprilHours4} />
      </td>
      {/* {props.dataRowsBody.months.Marth.hours.map(hours => (
        <td className={clases.cellhours}>
          <Input hours={hours} />
        </td>
      ))}
      {props.dataRowsBody.months.April.hours.map(hours => (
        <td className={clases.cellhours}>
          <Input hours={hours} />
        </td> 
      ))}*/}
    </tr>
  )
}
export default Row
