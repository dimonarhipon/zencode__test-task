import React from 'react'
import Input from '../../components/Input/Input'
import ChangeBg from '../ChangeBg/ChangeBg'
import clases from './Row.module.css'
import { Tr, Td } from '../Table/Table'
import Button from '../../components/Button/Button'

let Row = props => {
  return (
    <Tr>
      <Td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.fullName}
          onChange={event =>
            props.handlerChangefullName(props.dataRowsBody.index, event)
          }
        />
      </Td>
      <Td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.nameProject}
          onChange={event =>
            props.handlerChangeNameProject(props.dataRowsBody.index, event)
          }
        />
        <Button onClick={props.addProject}>+</Button>
      </Td>
      <Td className={clases.cellhours}>
        <select>
          {props.statuses.map(({ id, text }) => (
            <option key={id}>{text}</option>
          ))}
        </select>
      </Td>
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
            <Td
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
            </Td>
          ),
        ),
      )}
    </Tr>
  )
}
export default Row
