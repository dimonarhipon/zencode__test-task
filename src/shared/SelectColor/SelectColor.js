import React, { Fragment } from 'react'
import clases from './SelectColor.module.css'
import Button from '../../components/Button/Button'

let SelectColor = props => {
  return (
    <Fragment>
      <div className={clases.row}>
        <input
          type={props.type}
          onChange={props.handlerChange}
          value={props.input}
        />
        <input
          type="text"
          onChange={props.handlerChangeTitle}
          value={props.value}
        />
        <br />
        <Button onClick={props.add}>Добавить</Button>
      </div>
      {props.data.map((item, colorIndex) => (
        <div className={clases.row}>
          <input
            type="color"
            value={item.color}
            style={{ marginRight: 10 + 'px' }}
          />
          {item.title}
          <Button
            onClick={() => props.delete(colorIndex)}
            className={clases.close}
          >
            X
          </Button>
        </div>
      ))}
    </Fragment>
  )
}
export default SelectColor
