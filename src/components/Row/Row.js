import React from 'react'
import Input from '../Input/Input'
import ChangeBg from '../ChangeBg/ChangeBg'
import clases from './Row.module.css'
let Row = props => {
  return (
    <tr>
      <td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.fullName}
          onChange={event =>
            props.handlerChangefullName(props.dataRowsBody.index, event)
          }
        />
      </td>
      <td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.nameProject}
          onChange={event =>
            props.handlerChangeNameProject(props.dataRowsBody.index, event)
          }
        />
        <button onClick={props.addProject}>+</button>
      </td>
      <td className={clases.cellhours}>
        <select>
          {props.statuses.map(({ id, text }) => (
            <option key={id}>{text}</option>
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

      {props.month.map((element, index) =>
        props.dataRowsBody.months[props.month[index]].map(
          ({ id, number, background, show }) => (
            <td
              className={clases.cellhours}
              style={{ backgroundColor: background }}
            >
              <Input
                key={id}
                value={number}
                id={id}
                onChange={event =>
                  props.handlerChangeMonths(
                    id,
                    event,
                    props.month[index],
                    props.dataRowsBody.index,
                  )
                }
              />
              <ChangeBg
                id={id}
                show={show}
                onShow={props.onShow}
                month={props.month[index]}
                background={background}
                index={props.dataRowsBody.index}
                handleChangeComplete={props.handleChangeComplete}
              />
            </td>
          ),
        ),
      )}
    </tr>
  )
}
export default Row
