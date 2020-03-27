import React from 'react'
import { TwitterPicker } from 'react-color'
import clases from './ChangeBg.module.css'
import Button from '../../components/Button/Button'
let ChangeBg = props => {
  return (
    <>
      <div className={clases.color}>
        {props.show ? (
          <TwitterPicker
            color={props.background}
            onChangeComplete={props.onChangeComplete}
          />
        ) : null}
      </div>
      <Button onClick={props.onClick} className={clases.fill}>
        🖌
      </Button>
    </>
  )
}
export default ChangeBg
