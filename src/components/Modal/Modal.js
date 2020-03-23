import React from 'react'
import clases from './Modal.module.css'
import Button from '../Button/Button'
import SelectStatus from '../../shared/SelectStatus/SelectStatus'
import SelectColor from '../../shared/SelectColor/SelectColor'

let Modal = props => {
  return (
    <section className={clases.modal}>
      {!props.handlerChangeTitle ?
      <SelectStatus
        data={props.data}
        add={props.add}
        delete={props.delete}
        value={props.value}
        input={props.input}
        type={props.type}
        handlerChange={props.handlerChange}
      />
      :
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
      }
      <Button onClick={props.closeModal}>Закрыть</Button>
    </section>
  )
}
export default Modal
