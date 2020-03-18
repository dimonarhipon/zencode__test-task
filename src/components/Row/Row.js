import React from 'react'
import Input from '../Input/Input'
import ChangeBg from '../ChangeBg/ChangeBg'
import clases from './Row.module.css'

let Row = props => {
  let ChangefullName = event => {
    props.handlerChangefullName(props.dataRowsBody.index, event)
  }
  let ChangeNameProject = event => {
    props.handlerChangeNameProject(props.dataRowsBody.index, event)
  }
  let handlerChange = (id, event, month) => {
    props.handlerChangeMonths(
      id,
      event,
      month,
      props.dataRowsBody.index
    );
    // ChangeHoursFebrary = (event) => props.ChangeMonthsFebraryHours(props.id, event)
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
        {/* <button onClick={props.addProject}>+</button> */}
      </td>
      <td className={clases.cellhours}>
        <select>
          {props.statuses.map(({text}) => (
            <option key={text}>{text}</option>
          ))}
        </select>
      </td>       
      {/* ------------------------ Цвет фона ---------------- */}

      
      
      {/* <td>
        <select>
          {props.colors.map(({color}) => (
            <option style={{backgroundColor: color }}>
              {color}
            </option>
          ))}
        </select>
      </td>  */}
      {props.dataRowsBody.months[props.month_1].map(
        ({ id, number, background, show }) => (
          <td className={clases.cellhours} style={{backgroundColor: background}}>
            <Input
              month={props.month_1}
              key={id}
              handlerChange={handlerChange}
              value={number}
              id={id}
            />
            <ChangeBg 
              id={id}
              show={show}  
              onShow={props.onShow}
              month={props.month_1}
              background={background} 
              index={props.dataRowsBody.index}
              handleChangeComplete={props.handleChangeComplete} 
            />
          </td>
        )
      )}
      {props.dataRowsBody.months[props.month_2].map(
        ({ id, number, background, show }) => (
          <td className={clases.cellhours} style={{backgroundColor: background}}>
            <Input
              month={props.month_2}
              key={id}
              handlerChange={handlerChange}
              value={number}
              id={id}
            />
            <ChangeBg 
              id={id}
              show={show}  
              onShow={props.onShow}
              month={props.month_2}
              background={background} 
              index={props.dataRowsBody.index}
              handleChangeComplete={props.handleChangeComplete} 
            />
          </td>
        )
      )}
      {props.dataRowsBody.months[props.month_3].map(
        ({ id, number, background, show }) => (
          <td className={clases.cellhours} style={{backgroundColor: background}}>
            <Input
              month={props.month_3}
              key={id}
              handlerChange={handlerChange}
              value={number}
              id={id}
            />
            <ChangeBg 
              id={id}
              show={show}  
              onShow={props.onShow}
              month={props.month_3}
              background={background} 
              index={props.dataRowsBody.index}
              handleChangeComplete={props.handleChangeComplete} 
            />
          </td>
        )
      )}
      {props.dataRowsBody.months[props.month_4].map(
        ({ id, number, background, show }) => (
          <td className={clases.cellhours} style={{backgroundColor: background}}>
            <Input
              month={props.month_4}
              key={id}
              handlerChange={handlerChange}
              value={number}
              id={id}
            />
            <ChangeBg 
              id={id}
              show={show}  
              onShow={props.onShow}
              month={props.month_4}
              background={background} 
              index={props.dataRowsBody.index}
              handleChangeComplete={props.handleChangeComplete} 
            />
          </td>
        )
      )}
    </tr>
  )
}
export default Row
