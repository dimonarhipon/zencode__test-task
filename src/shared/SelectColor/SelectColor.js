import React, { Fragment } from 'react'
import clases from './SelectColor.module.css'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../components/Input/Input'
import {
  addColor,
  deleteColor,
  handlerChangeColor,
  handlerChangeTitleColor,
} from '../../redux/color-reducer'

let SelectColor = props => {
  const dataColor = useSelector(state => state.colorReducer.dataColor)
  const dispatch = useDispatch()
  return (
    <Fragment>
      <div className={clases.row}>
        <input
          type={props.type}
          onChange={(event) => dispatch(handlerChangeColor(event))}
          value={dataColor.input}
        />
        <Input
          className={clases.input}
          onChange={(event) => dispatch(handlerChangeTitleColor(event))}
          value={dataColor.value}
        />
        <br />
        <Button onClick={() => dispatch(addColor())}>Добавить</Button>
      </div>
      {dataColor.colors.map((item, colorIndex) => (
        <div className={clases.row}>
          <input
            type="color"
            value={item.color}
            style={{ marginRight: 10 + 'px' }}
          />
          {item.title}
          <Button
            onClick={() => dispatch(deleteColor(colorIndex))}
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
