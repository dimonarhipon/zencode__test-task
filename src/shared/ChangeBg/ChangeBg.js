import React, {useState} from 'react'
import { TwitterPicker } from 'react-color'
import clases from './ChangeBg.module.css'
import Button from '../../components/Button/Button'
let ChangeBg = props => {
  const [show, setShow] = useState(false)
  return (
    <>
      <section className={clases.color}>
        {show ? (
          <TwitterPicker
            color={props.background}
            onChangeComplete={(color) => {props.onChangeComplete(color); setShow(false)}}
          />
        ) : null}
      </section>
      <Button onClick={() => {props.onClick(); setShow(!show)}} className={clases.fill}>
        🖌
      </Button>
      {show ? (
        <div className={clases.overlay} onClick={() => setShow(false)}></div>
      ) : null}
    </>
  )
}
export default ChangeBg
