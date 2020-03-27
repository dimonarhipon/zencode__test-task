import React, { Fragment } from 'react'
import clases from './SelectStatus.module.css'
import Button from '../../components/Button/Button'

let SelectStatus = props => {
  return (
    <Fragment>
      <div className={clases.row}>
        <input type={props.type} />
        <input type="text" onChange={props.handlerChange} value={props.value} />
        <br />
        <Button onClick={props.add}>Добавить</Button>
      </div>
      {props.data.map((item, statusIndex) => (
        <div className={clases.row}>
          <p>{item.text}</p>
          <Button
            onClick={() => props.delete(statusIndex)}
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
