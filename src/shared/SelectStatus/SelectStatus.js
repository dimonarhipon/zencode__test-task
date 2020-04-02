import React, { Fragment } from 'react'
import {useForm} from 'react-hook-form'
import clases from './SelectStatus.module.css'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import {
  addStatus,
  deleteStatus,
  handlerChangeStatus,
} from '../../redux/status-reducer'
import Input from '../../components/Input/Input'

let SelectStatus = () => {
  const dataStatus = useSelector(state => state.statusReducer.dataStatus)
  const dispatch = useDispatch()

  const {register} = useForm();
  return (
    <Fragment>
      <div className={clases.row}>
        <Input className={clases.input}
          // name="statusText"
          // ref={register}
          onChange={event => dispatch(handlerChangeStatus(event))}
          value={dataStatus.value}
        />
        <br />
        <Button onClick={() => dispatch(addStatus())}>Добавить</Button>
      </div>
      {dataStatus.statuses.map((item, statusIndex) => (
        <div className={clases.row} key={statusIndex}>
          <p>{item.text}</p>
          <Button
            onClick={() => dispatch(deleteStatus(statusIndex))}
            className={clases.close}
          >
            X
          </Button>
        </div>
      ))}
    </Fragment>
  )
}
export default SelectStatus
