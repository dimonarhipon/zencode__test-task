import React, { useState } from 'react'
import clases from './Modal.module.css'
import Button from '../Button/Button'
import SelectStatus from '../../shared/SelectStatus/SelectStatus'
import SelectColor from '../../shared/SelectColor/SelectColor'

let Modal = props => {
  const [show, setShow] = useState(true)
  return (
    <>
      {show ? (
        <section className={clases.modal}>
          {!props.type ? (
            <SelectStatus
              data={props.data}
              add={props.add}
              delete={props.delete}
              value={props.value}
              input={props.input}
              type={props.type}
              handlerChange={props.handlerChange}
            />
          ) : (
            <SelectColor
              data={props.data}
              add={props.add}
              delete={props.delete}
              value={props.value}
              input={props.input}
              type={props.type}
              handlerChange={props.handlerChange}
              handlerChangeTitle={props.handlerChangeTitle}
            />
          )}
          <Button onClick={() => setShow(false)}>Закрыть</Button>
        </section>
      ) : null}
    </>
  )
}
export default Modal
