import React from 'react'
import { TwitterPicker } from 'react-color'
import clases from './ChangeBg.module.css'
let ChangeBg = props => {
  return (
    <>
      <div className={clases.color}>
        {props.show ? (
          <TwitterPicker
            color={props.background}
            onChangeComplete={color =>
              props.handleChangeComplete(
                color,
                props.id,
                props.month,
                props.index,
              )
            }
          />
        ) : null}
      </div>
      <button
        className={clases.fill}
        onClick={() => props.onShow(props.id, props.month, props.index)}
      >
        🖌
      </button>
      {/* <button
        style={{
          backgroundColor: background,
          marginBottom: 20 + "px"
        }}
      >
        Цвет
      </button> */}
    </>
  )
}
export default ChangeBg
