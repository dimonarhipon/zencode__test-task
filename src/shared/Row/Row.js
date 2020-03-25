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
            props.handlerChangefullName(props.index, event)
          }
        />
      </Td>
      <Td className={clases.cellhours}>
        <Input
          value={props.dataRowsBody.nameProject}
          onChange={event =>
            props.handlerChangeNameProject(props.index, event)
          }
        />
        <Button onClick={() => props.addProject(props.index)}>+</Button>
      </Td>
      <Td className={clases.cellhours}>
        <select 
          value={props.dataRowsBody.selectedValue}
          onChange={event => props.handlerSelectedStatus(props.index, event)}>
          {props.dataStatus.statuses.map(({ text }) => (
            <option value={text}>{text}</option>
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
          (item, monthsIndex) => (
            <Td
              className={clases.cellhours}
              style={{ backgroundColor: item.background }}
            >
              <Input
                value={item.number}
                onChange={event =>
                  props.handlerChangeMonths(
                    monthsIndex,
                    event,
                    props.month[index],
                    props.index,
                  )
                }
              />
              <ChangeBg
                show={item.show}
                background={item.background}
                onClick={() =>
                  props.onShow(
                    monthsIndex,
                    props.month[index],
                    props.index,
                  )
                }
                onChangeComplete={color =>
                  props.handleChangeComplete(
                    monthsIndex,
                    color,
                    props.month[index],
                    props.index,
                  )
                }
              />
            </Td>
          ),
        ),
      )}
    </Tr>
  )
}
export default Row
