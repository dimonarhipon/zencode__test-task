import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Input from '../../components/Input/Input'
import ChangeBg from '../ChangeBg/ChangeBg'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import initialState from '../../redux/initialState'
import {
  addDeveloper,
  deleteDeveloper,
  addProject,
  deleteProject,
  handlerChangefullName,
  handlerChangeNameProject,
  handlerSelectedStatus,
  handlerChangeMonths,
  handleChangeComplete
} from '../../redux/rows-reducer'

export let Tr = props => {
  return <tr {...props}></tr>
}
export let Td = props => {
  return <td {...props}></td>
}

let Table = () => {
  const [showModalStatus, setShowModalStatus] = useState(false)
  const [showModalColor, setShowModalColor] = useState(false)
  // const [state, dispatch] = useReducer(rowsReducer, initialState)

  // const dataRowsHead = useSelector(state => state.rowsReducer.dataRowsHead)
  const dataRowsBody = useSelector(state => state.rowsReducer.dataRowsBody)
  const dataStatus = useSelector(state => state.statusReducer.dataStatus)

  const dispatch = useDispatch()
  // console.log(dataRowsBody)
  // console.log(dataStatus)

  let now = new Date()
  let month = []
  for (let i = 0; i < 4; i++) {
    month.push(now.getMonth() + i)
  }

  // получаю число 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11
  return (
    <>
      <table className={clases.table}>
        <thead className={clases.columnsGroup}>
          <Tr>
            <Col row={2} value={initialState.dataRowsHead.name} />
            <Col row={2} value={initialState.dataRowsHead.project} />
            <Col row={2} value={initialState.dataRowsHead.status} />
            {month.map(item => (
              <Col
                key={item}
                col={initialState.dataRowsHead.months[item].weeks.length}
                value={initialState.dataRowsHead.months[item].name}
              />
            ))}
          </Tr>
          <Tr>
            {month.map((element, index) =>
              initialState.dataRowsHead.months[month[index]].weeks.map(item => (
                <Td key={item} className={clases.week}>
                  {item}
                </Td>
              )),
            )}
          </Tr>
        </thead>
        <tbody className={clases.workingHours}>
          {dataRowsBody.map((item, indexRow) => (
            <Tr key={indexRow}>
              <Td className={clases.cellhours}>
                <Input
                  value={dataRowsBody[indexRow].fullName}
                  onChange={event =>
                    dispatch(handlerChangefullName(indexRow, event))
                  }
                />
              </Td>
              <Td className={clases.cellhours}>
                <Input
                  value={dataRowsBody[indexRow].nameProject}
                  onChange={event =>
                    dispatch(handlerChangeNameProject(indexRow, event))
                  }
                />
                <Button
                  className={clases.buttonAddProject}
                  onClick={() => dispatch(addProject(indexRow))}
                >
                  +
                </Button>
                <Button
                  className={clases.buttonDeleteProject}
                  onClick={() => dispatch(deleteProject(indexRow))}
                >
                  -
                </Button>
              </Td>
              <Td className={clases.cellhours}>
                <select
                  value={dataRowsBody[indexRow].selectedValue}
                  onChange={event =>
                    dispatch(handlerSelectedStatus(indexRow, event))
                  }
                >
                  {dataStatus.statuses.map(({ text }) => (
                    <option key={text} value={text}>
                      {text}
                    </option>
                  ))}
                </select>
              </Td>
              {month.map((element, index) =>
                dataRowsBody[indexRow].months[month[index]].map(
                  (item, monthsIndex) => (
                    <Td
                      key={monthsIndex}
                      className={clases.cellhours}
                      style={{ backgroundColor: item.background }}
                    >
                      <Input
                        value={item.number}
                        onChange={event =>
                          dispatch(
                            handlerChangeMonths(
                              monthsIndex,
                              event,
                              month[index],
                              indexRow,
                            ),
                          )
                        }
                      />
                      <ChangeBg
                        background={item.background}
                        onChangeComplete={color =>
                          dispatch(
                            handleChangeComplete(
                              monthsIndex,
                              color,
                              month[index],
                              indexRow,
                            ),
                          )
                        }
                      />
                    </Td>
                  ),
                ),
              )}
            </Tr>
          ))}
        </tbody>
      </table>
      <section className={clases.control}>
        <Button
          className={clases.button}
          onClick={() => dispatch(addDeveloper())}
          children={'Добавить разработчика'}
        />
        <Button
          className={clases.button}
          onClick={() => dispatch(deleteDeveloper())}
          children={'Удалить разработчика'}
        />
        <Button
          className={clases.button}
          onClick={() => setShowModalStatus(!showModalStatus)}
          children={'Редактировать статус'}
        />
        <Button
          className={clases.button}
          onClick={() => setShowModalColor(!showModalColor)}
          children={'Редактировать цвет'}
        />
      </section>
      <section className={clases.modalStatus}>
        {showModalStatus ? <Modal /> : null}
      </section>
      <section className={clases.modalColor}>
        {showModalColor ? <Modal type="color" /> : null}
      </section>
    </>
  )
}
export default Table
