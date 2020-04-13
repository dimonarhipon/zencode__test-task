import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clases from './Table.module.css'
import Col from '../Column/Col'
import Input from '../../components/Input/Input'
import ChangeBg from '../ChangeBg/ChangeBg'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from "yup";
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
  handleChangeComplete,
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

  const dataRowsBody = useSelector(state => state.rowsReducer.dataRowsBody)
  const dataStatus = useSelector(state => state.statusReducer.dataStatus)

  const dispatch = useDispatch()

  let now = new Date()
  let month = []
  for (let i = 0; i < 4; i++) {
    month.push(now.getMonth() + i)
  }
  const FormTable = Yup.object().shape({
    week: Yup.number()
      .min(1)
      .max(90)
      .required("Required"),
  });
  
  // получаю число 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11
  return (
    <>
      <Formik
        initialValues={{ state: initialState, week: "" }}
        validationSchema={FormTable}
        // onSubmit={values =>
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2))
        //   }, 500)
        // }
        render={({ values, errors }) => (
          <Form>
            <FieldArray
              name="week"
              render={arrayHelpers => (
                <div>
                  {values.state.dataRowsBody.map((item, indexRow) => (
                    <Tr key={indexRow}>
                      <Td className={clases.cellhours}>
                        <Field name={`fullName[${indexRow}]`} />
                      </Td>
                      <Td className={clases.cellhours}>
                        <Field name={`projectName[${indexRow}]`} />
                        <Button onClick={() => arrayHelpers.remove(indexRow)}>
                          -
                        </Button>
                        <Button
                          onClick={() => arrayHelpers.insert(indexRow, '')}
                        >
                          +
                        </Button>
                      </Td>
                      <Td className={clases.cellhours}>
                        <Field
                          name={`selectedValue[${indexRow}]`}
                          component="select"
                        >
                          {values.state.dataStatus.statuses.map(({text}) => (
                            <option
                              key={text}
                              name={`selectedValue[${text}]`}
                              value={text}
                            >
                              {text}
                            </option>
                          ))}
                        </Field>
                      </Td>
                      {month.map((element, index) =>
                        values.state.dataRowsBody[indexRow].months[month[index]].map(
                          (item, monthsIndex) => (
                            <Td
                              key={monthsIndex}
                              className={clases.cellhours}
                              style={{ backgroundColor: item.background }}
                            >
                              <Field
                                type="number"
                                name={`week[${indexRow} ${monthsIndex}]`}
                              />
                              {errors.week}
                              <ChangeBg
                                name={`color[${item}]`}
                                background={item.background}
                                onChangeComplete={value =>
                                  dispatch(
                                    handleChangeComplete(
                                      monthsIndex,
                                      value,
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
                </div>
              )}
            />
          </Form>
        )}
      />
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
                  name={`fullName[${item}]`}
                  value={dataRowsBody[indexRow].fullName}
                  onChange={value =>
                    dispatch(handlerChangefullName(indexRow, value))
                  }
                />
              </Td>
              <Td className={clases.cellhours}>
                <Input
                  name={`nameProject[${item}]`}
                  value={dataRowsBody[indexRow].nameProject}
                  onChange={value =>
                    dispatch(handlerChangeNameProject(indexRow, value))
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
                  name={`selectedValue[${item}]`}
                  value={dataRowsBody[indexRow].selectedValue}
                  onChange={value =>
                    dispatch(handlerSelectedStatus(indexRow, value))
                  }
                >
                  {dataStatus.statuses.map(({ text }) => (
                    <option key={text} value={text} name={`selected[${text}]`}>
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
                        type="number"
                        name={`week[${item}]`}
                        value={item.number}
                        onChange={value =>
                          dispatch(
                            handlerChangeMonths(
                              monthsIndex,
                              value,
                              month[index],
                              indexRow,
                            ),
                          )
                        }
                      />
                      <ChangeBg
                        name={`color[${item}]`}
                        background={item.background}
                        onChangeComplete={value =>
                          dispatch(
                            handleChangeComplete(
                              monthsIndex,
                              value,
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
          onClick={() => setShowModalStatus(true)}
          children={'Редактировать статус'}
        />
        <Button
          className={clases.button}
          onClick={() => setShowModalColor(true)}
          children={'Редактировать цвет'}
        />
      </section>
      <section className={clases.modalStatus}>
        <Modal isOpen={showModalStatus} onClose={setShowModalStatus} />
      </section>
      <section className={clases.modalColor}>
        <Modal
          isOpen={showModalColor}
          onClose={setShowModalColor}
          type="color"
        />
      </section>
    </>
  )
}
export default Table
